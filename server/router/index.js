const router = require("express").Router();

const { getUsers, checkLogin } = require("./../controllers/user");

const makeExpressCallback = require("./../make-express-callback");

router.post("/users/login", makeExpressCallback(checkLogin));
router.get("/users", makeExpressCallback(getUsers));

module.exports = router;
