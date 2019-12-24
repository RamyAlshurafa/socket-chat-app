const { readSqlFile } = require("../../index");

const MessageRecipient = () => {
  const buildTable = async () => readSqlFile(`${__dirname}/message_recipient.schema.sql`);

  const seed = async () => readSqlFile(`${__dirname}/message_recipient.seeds.sql`);


  return Object.freeze({
    buildTable,
    seed,
  });
};

module.exports = MessageRecipient;
