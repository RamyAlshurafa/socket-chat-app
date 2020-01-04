const checkUserLogin = ({
  User,
  convertToCamalCase,
  createToken,
}) => async ({ email, password }) => {
  // TODO use convertToCamalCase in data-access level
  // so data return from database same
  const [user] = convertToCamalCase(await User.getUserByEmail({ email }));

  if (!user) {
    // TODO - create error class
    throw new Error("NOT_FOUND");
  }

  if (user.password !== password) {
    throw new Error("NOT_FOUND");
  }

  const token = createToken({ userId: user.id });

  user.password = undefined;

  return {
    userInfo: user,
    token,
  };
};

module.exports = checkUserLogin;
