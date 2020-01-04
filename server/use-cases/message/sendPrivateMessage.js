const sendPrivateMessage = ({
  Message,
  MessageRecipient,
  convertToCamalCase,
}) => async ({ fromId, toId, body }) => {
  const createdMessage = convertToCamalCase(await Message.create({ fromId, body }));
  await MessageRecipient.createMessageRecipient({
    messageId: createdMessage.id,
    recipientId: toId,
  });
};
module.exports = sendPrivateMessage;
