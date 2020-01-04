const { readSqlFile } = require("./../../index");

const User = () => {
  const buildTable = async () => readSqlFile(`${__dirname}/user.schema.sql`);

  const seed = async () => readSqlFile(`${__dirname}/user.seeds.sql`);


  return Object.freeze({
    buildTable,
    seed,
  });
};

module.exports = User;
