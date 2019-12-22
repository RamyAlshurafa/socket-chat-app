const User = require("./../models/User")();

// const buildTable = async (table) => {
//   const sql = fs.readFileSync(`${__dirname}/${table}.sql`).toString();

//   const client = await getClient();
//   await client.query(sql);
//   await client.release();
//   console.log("done: ", table);
// };


(() => {
  const sequenceFunctions = [
    User.buildTable,
    User.seed,
  ];


  const doneFunctions = [];

  let sequence = Promise.resolve();

  sequenceFunctions.forEach((func) => {
    sequence = sequence.then(() => func().then((res) => {
      doneFunctions.push(res);
    }));
  });
})();
