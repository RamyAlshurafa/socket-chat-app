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


module.exports = {
  convertToCamalCase,
};
