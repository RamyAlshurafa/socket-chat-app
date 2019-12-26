module.exports = ({ getMessagesBetweenTwoUsers }) => async (httpRequest) => {
  try {
    const { fromId, toId } = httpRequest.query;

    const messages = await getMessagesBetweenTwoUsers({ fromId, toId });
    return {
      body: messages,
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
