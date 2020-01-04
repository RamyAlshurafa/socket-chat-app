module.exports = ({ sendPrivateMessage }) => async (httpRequest) => {
  try {
    const { from, to, message } = httpRequest.body;
    const messages = await sendPrivateMessage({
      fromId: from,
      toId: to,
      body: message,
    });
    return {
      body: messages,
      statusCode: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400,
      body: {
        error: error.message,
      },
    };
  }
};
