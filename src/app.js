const app = require('./parser/index');
const db = require('./database/mongo'); // database configuration
const config = require('./settings/enviroment');

// connection to mongodb
db.connection.on('error', (err) => {
    console.log(` ${config.colors.red}  Error na conexao com o banco de dados! ${err} `);
});

db.connection.on('disconnected', () => {
    console.log(` ${config.colors.yellow} Aplicação desconectada do banco de dados!`);
});

db.connection.on('connected', () => {
    console.log(` ${config.colors.green} Aplicação conectada ao banco de dados!`)
});


module.exports = app;