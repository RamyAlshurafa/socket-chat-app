const getUsers = ({
  User,
  convertToCamalCase,
}) => async () => convertToCamalCase(await User.getUsers());

module.exports = getUsers;
