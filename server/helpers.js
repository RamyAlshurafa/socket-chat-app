const jwt = require("jsonwebtoken");
const { server: serverConfig } = require("./config");

const snakeToCamel = (str) => str.replace(
  /([-_][a-z])/g,
  (group) => group.toUpperCase()
    .replace("-", "")
    .replace("_", ""),
);

const convertObject = (object) => {
  const convertedObject = {};
  Object.entries(object).forEach(([key, value], i) => {
    const convertedKey = snakeToCamel(key);
    convertedObject[convertedKey] = value;
  });
  return convertedObject;
};

const convertToCamalCase = (input) => {
  if (input instanceof Array) {
    return input.map(convertObject);
  } if (input instanceof Object) {
    return convertObject(input);
  }
  return input;
};


const createToken = ({ id }) => jwt.sign({ id }, serverConfig.secret, {
  expiresIn: serverConfig.tokenMaxAgeString,
});


module.exports = {
  convertToCamalCase,
  createToken,
};
