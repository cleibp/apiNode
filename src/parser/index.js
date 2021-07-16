const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const app = require('./express');

// use morgan to log requests to the console
app.use(logger('dev'));

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// hability Cross-origin Resource Sharing for methods HTTP
app.use(cors());

/**
 * Best Practice Security
 * @see http://expressjs.com/pt-br/advanced/best-practice-security.html
 */
app.use(helmet());
// app.disable('x-powered-by'); Caso não queira utilizar o helmet

module.exports = app;