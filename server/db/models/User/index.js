const fs = require("fs");
const { getClient } = require("./../../index");

const User = () => {
  const buildTable = async () => {
    const sql = fs.readFileSync(`${__dirname}/user.schema.sql`).toString();

    const client = await getClient();
    await client.query(sql);
    await client.release();
    console.log("done: User - build schema");
  };

  const seed = async () => {
    const sql = fs.readFileSync(`${__dirname}/user.seeds.sql`).toString();

    const client = await getClient();
    await client.query(sql);
    await client.release();
    console.log("done: User - seed");
  };

  return Object.freeze({
    buildTable,
    seed,
  });
};

module.exports = User;
