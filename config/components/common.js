'use strict';

const joi = require('joi');

const serverVarsSchema = joi
  .object({
    NODE_ENV: joi
      .string()
      .allow(['development', 'production', 'test', 'staging'])
      .required()
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
  isDevelopment: serverVars.NODE_ENV === 'development'
};

module.exports = config;
