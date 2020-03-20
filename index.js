const dotenv = require('dotenv');
dotenv.config();

const processType = process.env.PROCESS_TYPE;

if (processType === 'web') {
  require('./web');
} else if (processType === 'twitter-stream-worker') {
  require('./worker/twitter-stream');
} else if (processType === 'email-sender') {
  require('./worker/email-sender');
} else {
  throw new Error(
    `${processType} is an unsupported process type. Use one of: 'web', 'twitter-stream-worker', 'email-sender'!`
  );
}
