const cookie = require("cookie");
const jwt = require("jsonwebtoken");

const { server: { secret, tokenMaxAgeString } } = require("./../config");

const getCookiesFromHttpReq = require("./getCookiesFromHttpReq");
const makeParseCookies = require("./parseCookies");
const makeCreateToken = require("./createToken");

module.exports = {
  getCookiesFromHttpReq,
  parseCookies: makeParseCookies({ parser: cookie.parse }),
  createToken: makeCreateToken({ sign: jwt.sign, secret, tokenMaxAgeString }),
};
