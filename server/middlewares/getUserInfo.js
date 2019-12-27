module.exports = ({ getUserInfo }) => async (httpRequest) => {
  const { userId } = httpRequest;
  try {
    const user = await getUserInfo({ id: userId });

    if (!user) {
      throw new Error("NOT_FOUND");
    }

    user.password = null;

    return {
      ...httpRequest,
      user,
    };
  } catch (error) {
    throw new Error("500_ERROR");
  }
};
