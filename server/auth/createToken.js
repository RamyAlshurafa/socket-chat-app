const createToken = ({ sign, secret, tokenMaxAgeString }) => (data) => sign(data, secret, {
  expiresIn: tokenMaxAgeString,
});

module.exports = createToken;
