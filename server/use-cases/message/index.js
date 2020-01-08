const EventEmitter = require("events");

const makeGetMessagesBetweenTwoUsers = require("./getMessagesBetweenTwoUsers");
const makeSendPrivateMessage = require("./sendPrivateMessage");

const { Message: MessageModel, MessageRecipient } = require("../../data-access");
const { convertToCamalCase } = require("./../../helpers");

const getMessagesBetweenTwoUsers = makeGetMessagesBetweenTwoUsers({
  Message: MessageModel,
  convertToCamalCase,
});
const sendPrivateMessage = makeSendPrivateMessage({
  Message: MessageModel,
  MessageRecipient,
  convertToCamalCase,
});

class Message extends EventEmitter {
  constructor() {
    super();
    this.getMessagesBetweenTwoUsers = getMessagesBetweenTwoUsers.bind(this);
    this.sendPrivateMessage = sendPrivateMessage.bind(this);
  }
}

module.exports = new Message();
