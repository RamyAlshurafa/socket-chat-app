const makeGetMessagesBetweenTwoUsers = require("./getMessagesBetweenTwoUsers");

const { message: messageDB } = require("../../data-access");
const { convertToCamalCase } = require("./../../helpers");

module.exports = {
  getMessagesBetweenTwoUsers: makeGetMessagesBetweenTwoUsers({ messageDB, convertToCamalCase }),
};
