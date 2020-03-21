'use strict';

const joi = require('joi');
const dotenv = require('dotenv');
dotenv.config();

const databaseVarsSchema = joi
  .object({ DATABASE_URL: joi.string().required() })
  .unknown();

const { error, value: databaseVars } = joi.validate(
  process.env,
  databaseVarsSchema
);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  development: {
    url: databaseVars.DATABASE_URL,
    dialect: 'postgres'
  },
  test: {
    url: databaseVars.DATABASE_URL,
    dialect: 'postgres'
  },
  staging: {
    url: databaseVars.DATABASE_URL,
    dialect: 'postgres'
  },
  production: {
    url: databaseVars.DATABASE_URL,
    dialect: 'postgres'
  }
};

module.exports = config;
