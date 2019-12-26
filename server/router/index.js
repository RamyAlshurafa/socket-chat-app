const router = require("express").Router();

const { getUsers, checkLogin } = require("./../controllers/user");

const { getMessagesBetweenTwoUsers } = require("./../controllers/message");

const makeExpressCallback = require("./../make-express-callback");

router.post("/users/login", makeExpressCallback(checkLogin));
router.get("/users", makeExpressCallback(getUsers));

router.get("/messages/private/", makeExpressCallback(getMessagesBetweenTwoUsers));

module.exports = router;
