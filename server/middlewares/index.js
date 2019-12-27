const jwt = require("jsonwebtoken");

const { getCookiesFromHttpReq: getCookies, parseCookies } = require("./../auth");

const { server: { secret } } = require("./../config");
const makeTokenAuthentication = require("./tokenAuthentication");
const getUserInfo = require("./getUserInfo");

// middlewares should take http request and return http request
module.exports = {
  tokenAuthentication: (tokenName) => makeTokenAuthentication({
    verify: jwt.verify,
    secret,
    tokenName,
    getCookies,
    parseCookies,
  }),
  getUserInfo,
};
