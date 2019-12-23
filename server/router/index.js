const router = require("express").Router();
const { getUsers } = require("./../controllers/user");
const makeExpressCallback = require("./../make-express-callback");

router.use("/users", makeExpressCallback(getUsers));

module.exports = router;
