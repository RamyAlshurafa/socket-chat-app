const makeGetMessagesBetweenTwoUsers = require("./getMessagesBetweenTwoUsers");
const makeSendPrivateMessage = require("./sendPrivateMessage");
const {
  message: { getMessagesBetweenTwoUsers, sendPrivateMessage },
} = require("./../../use-cases");

module.exports = {
  getMessagesBetweenTwoUsers: makeGetMessagesBetweenTwoUsers({ getMessagesBetweenTwoUsers }),
  sendPrivateMessage: makeSendPrivateMessage({ sendPrivateMessage }),
};
