const jwt = require("jsonwebtoken");

const { getCookiesFromHttpReq: getCookies, parseCookies } = require("./../auth");

const { server: { secret } } = require("./../config");
const makeTokenAuthentication = require("./tokenAuthentication");

module.exports = {
  tokenAuthentication: (tokenName) => makeTokenAuthentication({
    verify: jwt.verify,
    secret,
    tokenName,
    getCookies,
    parseCookies,
  }),
};
