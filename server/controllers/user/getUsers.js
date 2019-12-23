
module.exports = ({ getUsers }) => async (httpRequest) => {
  try {
    const users = await getUsers();
    return {
      body: users,
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
