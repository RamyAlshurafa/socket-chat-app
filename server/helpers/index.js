const convertStringToCamelCase = (str) => str.replace(
  /([-_][a-z])/gi,
  (group) => group.toUpperCase()
    .replace("-", "")
    .replace("_", ""),
);

const convertObjectToCamelCase = (object) => {
  const convertedObject = {};
  Object.entries(object).forEach(([key, value], i) => {
    const convertedKey = convertStringToCamelCase(key);
    convertedObject[convertedKey] = value;
  });
  return convertedObject;
};

const convertToCamalCase = (input) => {
  if (input instanceof Array) {
    return input.map(convertObjectToCamelCase);
  } if (input instanceof Object) {
    return convertObjectToCamelCase(input);
  } if (typeof input === "string") {
    return convertStringToCamelCase(input);
  }
  return input;
};


module.exports = {
  convertToCamalCase,
  convertStringToCamelCase,
  convertObjectToCamelCase,
};
