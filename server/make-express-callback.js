module.exports = ({ controller, middlewares = [] }) => (req, res) => {
  const httpRequest = {
    body: req.body,
    params: req.params,
    query: req.query,
    method: req.method,
    headers: req.headers,
  };

  let sequence = Promise.resolve(httpRequest);

  middlewares.forEach((middleware) => {
    sequence = sequence.then((_httpRequest) => middleware(_httpRequest));
  });

  sequence.then((_httpRequest) => controller(_httpRequest)
    // controller must return { statusCode, body }
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
      .send({ error: "An unkown error occurred." })))
    .catch((e) => res
      // TODO handle error comes from middlewares
      .status(500)
      .send({ error: "An unkown error occurred." }));
};
