const { readSqlFile } = require("./../../index");

const Message = () => {
  const buildTable = async () => readSqlFile(`${__dirname}/message.schema.sql`);

  const seed = async () => readSqlFile(`${__dirname}/message.seeds.sql`);


  return Object.freeze({
    buildTable,
    seed,
  });
};

module.exports = Message;
