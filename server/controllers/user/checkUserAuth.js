module.exports = ({ getUserInfo }) => async (httpRequest) => {
  try {
    const { id } = httpRequest.user;
    const userInfo = await getUserInfo({ id });

    return {
      body: userInfo,
      statusCode: 200,
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: {
        error: error.message,
      },
    };
  }
};
