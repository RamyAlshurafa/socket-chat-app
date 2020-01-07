module.exports = ({ sendPrivateMessage }) => async (httpRequest) => {
  try {
    const { from, to, message } = httpRequest.body;
    const sentMessage = await sendPrivateMessage({
      fromId: from,
      toId: to,
      body: message,
    });

    return {
      body: sentMessage,
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
