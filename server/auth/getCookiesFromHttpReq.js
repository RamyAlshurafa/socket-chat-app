module.exports = (httpRequest) => {
  // can be changed any time to get extract the token in another way
  // e.g from bearer
  const cookies = httpRequest.headers.cookie || "";
  return cookies;
};

//  ---------------   Bearer    --------------
// if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//   return req.headers.authorization.split(' ')[1];
// }
