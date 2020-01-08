const sendPrivateMessage = ({
  Message,
  MessageRecipient,
  convertToCamalCase,
}) => async function ({ fromId, toId, body }) {
  const createdMessage = convertToCamalCase(await Message.create({ fromId, body }));
  const { firstName, lastName } = convertToCamalCase(await MessageRecipient.createMessageRecipient({
    messageId: createdMessage.id,
    recipientId: toId,
  }));

  this.emit("privateMessageAdded", {
    body, fromId, firstName, lastName, ...createdMessage, toId,
  });

  return createdMessage;
};
module.exports = sendPrivateMessage;
