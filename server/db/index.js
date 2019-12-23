/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const { Pool } = require("pg");
const fs = require("fs");

const config = require("../config");

const { env } = config.common;
const connectionString = config.sqlDatabase.databaseUrl[env];

console.log(connectionString);
const pool = new Pool({ connectionString });

const getClient = async (callback) => {
  const client = await pool.connect();
  const { query, release } = client;

  // monkey patch the query method to keep track of the last query executed
  client.query = (...args) => {
    client.lastQuery = args;
    return query.apply(client, args);
  };

  // set a timeout of 5 seconds, after which we will log this client's last query
  const timeout = setTimeout(() => {
    console.error("A client has been checked out for more than 5 seconds!");
    console.error(`The last executed query on this client was: ${client.lastQuery}`);
  }, 5000);

  const done = (err2) => {
    // call the actual 'done' method, returning this client to the pool
    release(err2);
    // clear our timeout
    clearTimeout(timeout);
    // set the query method back to its old un-monkey-patched version
    client.query = query;
  };

  // set the release method back to its old un-monkey-patched version
  client.release = done;
  return client;
};
module.exports = {
  query: (text, params, callback) => pool.query(text, params),
  // Do not use pool.query if you need transactional integrity
  // check out a client from the pool to run several queries in a row in a transaction
  // You must call the releaseCallback or client.release
  // (which points to the releaseCallback) when you are finished with a client.
  getClient,
  readSqlFile: async (filePath) => {
    const sql = fs.readFileSync(filePath).toString();

    const client = await getClient();
    await client.query(sql);
    await client.release();
    console.log(`done: ${filePath.split("/").slice(-1)}`);
  },
};
