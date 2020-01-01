const joi = require("joi");

const envVarsSchema = joi.object({
  NODE_ENV: joi.string()
    .allow(["development", "production", "test", "provision"])
    .required(),
}).unknown()
  .required();

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const { error, value: envVars } = joi.validate(process.env, envVarsSchema);

if (error) {
  console.error(error);
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
};

module.exports = config;
