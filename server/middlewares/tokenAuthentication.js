module.exports = ({
  verify,
  tokenName,
  secret,
  getCookies,
  parseCookies,
}) => async (httpRequest) => {
  if (!tokenName) {
    throw new Error("tokenName is required");
  }

  try {
    const stringCookies = getCookies(httpRequest);
    const parsedCookies = parseCookies(stringCookies);

    const token = parsedCookies[tokenName];

    if (!token) {
      throw new Error("unvalid token");
    }
    const decoded = verify(token, secret);
    return decoded;
  } catch (error) {
    throw new Error("unvalid token");
  }
};
