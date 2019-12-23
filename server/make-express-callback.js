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
      res.type("json");
      res.status(httpResponse.statusCode).send(httpResponse.body);
    })
    .catch((e) => res
      .status(500)
      .send({ error: "An unkown error occurred." }));
};
