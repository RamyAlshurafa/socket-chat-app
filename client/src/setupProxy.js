const proxy = require("http-proxy-middleware");

module.exports = app => {
  const target =
    process.env.REACT_APP_REACT_ENV === "test"
      ? "http://localhost:3002/" // you can it from porcess.env
      : "http://localhost:8080/";

  app.use(proxy("/api", { target }));
};
