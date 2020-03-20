const joi = require('joi');

const serverVarsSchema = joi
  .object({
    APP_URL: joi.string(),
    NODE_ENV: joi
      .string()
      .allow(['development', 'production', 'test', 'staging'])
      .required(),
    PORT: joi.number().required()
  })
  .unknown();

const { error, value: serverVars } = joi.validate(
  process.env,
  serverVarsSchema
);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: serverVars.NODE_ENV,
  isTest: serverVars.NODE_ENV === 'test',
  isDevelopment: serverVars.NODE_ENV === 'development',
  server: {
    port: serverVars.PORT,
    appUrl: serverVars.APP_URL || `http://localhost:${serverVars.PORT}/`
  }
};

module.exports = config;
