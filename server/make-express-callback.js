module.exports = (controller) => (req, res) => {
  const httpRequest = {
    body: req.body,
    params: req.params,
    query: req.query,
    method: req.method,
  };

  // controller must return { statusCode, body }
  controller(httpRequest)
    .then((httpResponse) => {
      const { cookies, body, statusCode } = httpResponse;

      if (cookies instanceof Array) {
        cookies.forEach((cookie) => {
          res.cookie(cookie.name, cookie.value);
        });
      }

      res.type("json");
      res.status(statusCode).send(body);
    })
    .catch((e) => res
      .status(500)
      .send({ error: "An unkown error occurred." }));
};
