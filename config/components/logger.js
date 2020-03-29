const joi = require('joi');

const loggerVarsSchema = joi
  .object({
    LOGGER_LEVER: joi
      .string()
      .allow(['error', 'warn', 'info', 'verbose', 'debug', 'silly'])
      .default('info'),
    LOGGER_ENABLED: joi
      .boolean()
      .truthy('TRUE')
      .truthy('true')
      .falsy('FALSE')
      .falsy('false')
      .default(true),
  })
  .unknown()
  .required();

const { error, value: loggerVars } = joi.validate(
  process.env,
  loggerVarsSchema,
);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  logger: {
    level: loggerVars.LOGGER_LEVEL,
    enabled: loggerVars.LOGGER_ENABLED,
  },
};

module.exports = config;
