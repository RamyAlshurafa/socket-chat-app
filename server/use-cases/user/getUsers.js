
const getUsers = ({
  userDB,
  convertToCamalCase,
}) => async () => convertToCamalCase(await userDB.getUsers());

module.exports = getUsers;
