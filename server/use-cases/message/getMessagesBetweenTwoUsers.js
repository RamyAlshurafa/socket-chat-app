const getMessagesBetweenTwoUsers = ({
  messageDB,
  convertToCamalCase,
  // TODO validation here
}) => async ({ fromId, toId }) => convertToCamalCase(
  await messageDB.getMessagesBetweenTwoUsers({ fromId, toId }),
);

module.exports = getMessagesBetweenTwoUsers;
