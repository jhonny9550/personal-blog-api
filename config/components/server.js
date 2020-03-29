const joi = require('joi');

const serverVarsSchema = joi
  .object({
    APP_URL: joi.string(),
    PORT: joi.number().required(),
  })
  .unknown();

const { error, value: serverVars } = joi.validate(
  process.env,
  serverVarsSchema,
);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  server: {
    port: serverVars.PORT,
    appUrl: serverVars.APP_URL || `http://localhost:${serverVars.PORT}/`,
  },
};

module.exports = config;
