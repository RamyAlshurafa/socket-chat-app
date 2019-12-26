const makeGetMessagesBetweenTwoUsers = require("./getMessagesBetweenTwoUsers");

const {
  message: { getMessagesBetweenTwoUsers },
} = require("./../../use-cases");

module.exports = {
  getMessagesBetweenTwoUsers: makeGetMessagesBetweenTwoUsers({ getMessagesBetweenTwoUsers }),
};
