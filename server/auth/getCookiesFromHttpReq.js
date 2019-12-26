module.exports = (httpRequest) => {
  // can be changed any time to get extract the token in another way
  // e.g from bearer
  const cookies = httpRequest.headers.cookie || "";
  return cookies;
};
