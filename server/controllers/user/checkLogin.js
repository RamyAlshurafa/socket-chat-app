
module.exports = ({ checkUserLogin }) => async (httpRequest) => {
  try {
    const { email, password } = httpRequest.body;

    const { userInfo, token } = await checkUserLogin({ email, password });

    return {
      body: userInfo,
      statusCode: 200,
      cookies: [
        {
          name: "token",
          value: token,
        },
      ],
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