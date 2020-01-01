
const joi = require("joi");

const envVarsSchema = joi.object({
  PORT: joi.number()
    .required(),
  SECRET: joi.string()
    .required(),
  TOKEN_MAX_AGE_STRING: joi.string()
    .required(),
  TOKEN_MAX_AGE_NUMBER: joi.number()
    .required(),
}).unknown()
  .required();

const { error, value: envVars } = joi.validate(process.env, envVarsSchema);
if (error) {
  console.error(error);
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  port: envVars.PORT,
  secret: envVars.SECRET,
  tokenMaxAgeString: envVars.TOKEN_MAX_AGE_STRING,
  tokenMaxAgeNumber: envVars.TOKEN_MAX_AGE_NUMBER,
};

module.exports = config;
