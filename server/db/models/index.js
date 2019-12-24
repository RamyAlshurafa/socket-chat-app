const User = require("./../models/User")();
const Message = require("./../models/Message")();


(() => {
  const sequenceFunctions = [
    User.buildTable,
    User.seed,
    Message.buildTable,
    Message.seed,
  ];


  const doneFunctions = [];

  let sequence = Promise.resolve();

  sequenceFunctions.forEach((func) => {
    sequence = sequence.then(() => func().then((res) => {
      doneFunctions.push(res);
    }));
  });
})();
