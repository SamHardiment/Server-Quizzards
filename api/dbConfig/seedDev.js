const db = require("./init");
const fs = require("fs");

const seeds = fs.readFileSync(__dirname + "/dev_seeds.sql").toString();

db.query(seeds, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log("dev db seeded");
    console.log(res);
  }
});
