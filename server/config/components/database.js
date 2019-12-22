const joi = require("joi");

const scheme = [
  "postgres",
];

const envVarsSchema = joi.object({
  DATABASE_URL: joi.string().uri({
    scheme,
  }).when("NODE_ENV", { is: "production", then: joi.required() }),

  DATABASE_URL_TEST: joi.string().uri({
    scheme,
  }).when("NODE_ENV", { is: "test", then: joi.required() }),

  DATABASE_URL_DEV: joi.string().uri({
    scheme,
  }).when("NODE_ENV", { is: "development", then: joi.required() }),

}).unknown()
  .required();

const { error, value: envVars } = joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  databaseUrl: {
    production: envVars.DATABASE_URL,
    test: envVars.DATABASE_URL_TEST,
    development: envVars.DATABASE_URL_DEV,
  },
};

module.exports = config;
