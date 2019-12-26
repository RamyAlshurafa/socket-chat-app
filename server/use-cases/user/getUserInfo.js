const getUserInfo = ({
  userDB,
  convertToCamalCase,
}) => async ({ id }) => {
  const [user] = convertToCamalCase(await userDB.getUserById({ id }));

  if (!user) {
    // TODO - create error class
    throw new Error("NOT_FOUND");
  }

  user.password = undefined;

  return user;
};

module.exports = getUserInfo;
