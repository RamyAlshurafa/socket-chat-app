const router = require("express").Router();
const { tokenAuthentication, getUserInfo: makeGetUserInfoMiddleware } = require("./../middlewares");

const {
  getUsers, checkLogin, getUserInfo, checkUserAuth,
} = require("./../controllers/user");
const { getMessagesBetweenTwoUsers, sendPrivateMessage } = require("./../controllers/message");

const { user: { getUserInfo: getUserInfoUseCase } } = require("./../use-cases");

const makeExpressCallback = require("./../make-express-callback");

const tokenName = "token";

const getUserInfoMiddleware = makeGetUserInfoMiddleware({ getUserInfo: getUserInfoUseCase });

router.post("/users/login", makeExpressCallback({ controller: checkLogin(tokenName) }));

router.get("/users/auth", makeExpressCallback({
  controller: checkUserAuth,
  middlewares: [
    tokenAuthentication(tokenName),
    getUserInfoMiddleware,
  ],
}));

router.get("/users/:id", makeExpressCallback({ controller: getUserInfo }));

router.get("/users", makeExpressCallback({ controller: getUsers }));

router.get("/messages/private/", makeExpressCallback({ controller: getMessagesBetweenTwoUsers }));
router.post("/messages/", makeExpressCallback({ controller: sendPrivateMessage }));

module.exports = router;
