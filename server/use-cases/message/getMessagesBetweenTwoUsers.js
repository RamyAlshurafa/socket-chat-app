const getMessagesBetweenTwoUsers = ({
  Message,
  convertToCamalCase,
  // TODO validation here
}) => async ({ fromId, toId }) => convertToCamalCase(
  await Message.getMessagesBetweenTwoUsers({ fromId, toId }),
);

module.exports = getMessagesBetweenTwoUsers;
