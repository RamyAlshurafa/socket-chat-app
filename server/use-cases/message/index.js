const makeGetMessagesBetweenTwoUsers = require("./getMessagesBetweenTwoUsers");

const { Message } = require("../../data-access");
const { convertToCamalCase } = require("./../../helpers");

module.exports = {
  getMessagesBetweenTwoUsers: makeGetMessagesBetweenTwoUsers({ Message, convertToCamalCase }),
};
