const router = require("express").Router();

const { getUsers, checkLogin, getUserInfo } = require("./../controllers/user");

const { getMessagesBetweenTwoUsers } = require("./../controllers/message");

const makeExpressCallback = require("./../make-express-callback");

router.post("/users/login", makeExpressCallback(checkLogin));
router.get("/users/:id", makeExpressCallback(getUserInfo));
router.get("/users", makeExpressCallback(getUsers));

router.get("/messages/private/", makeExpressCallback(getMessagesBetweenTwoUsers));

module.exports = router;
