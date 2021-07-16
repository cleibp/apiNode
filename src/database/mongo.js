const mongoose = require('mongoose');
const config = require('../settings/enviroment');

const url = config.bd_string;
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);

module.exports = mongoose;