const User = require("./../models/User")();
const Message = require("./../models/Message")();
const MessageRecipient = require("./../models/MessageRecipient")();

(() => {
  const sequenceFunctions = [
    User.buildTable,
    User.seed,
    Message.buildTable,
    Message.seed,
    MessageRecipient.buildTable,
    MessageRecipient.seed,
  ];


  const doneFunctions = [];

  let sequence = Promise.resolve();

  sequenceFunctions.forEach((func) => {
    sequence = sequence.then(() => func().then((res) => {
      doneFunctions.push(res);
    })).catch(console.log);
  });
})();
