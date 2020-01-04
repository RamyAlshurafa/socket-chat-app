const makeGetMessagesBetweenTwoUsers = require("./getMessagesBetweenTwoUsers");
const makeSendPrivateMessage = require("./sendPrivateMessage");

const { Message, MessageRecipient } = require("../../data-access");
const { convertToCamalCase } = require("./../../helpers");

module.exports = {
  getMessagesBetweenTwoUsers: makeGetMessagesBetweenTwoUsers({ Message, convertToCamalCase }),
  sendPrivateMessage: makeSendPrivateMessage({ Message, MessageRecipient, convertToCamalCase }),
};
