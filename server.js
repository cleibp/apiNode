/**
 * @file server.js
 * @description Servidor
 * @author Cleiton Bezerra Paiva
 * @date 13/07/2021
 */

const config = require('./src/settings/enviroment');

const app = require('./src/app');

app.listen(config.server_port, config.hostname, () => {
    console.log(` ${config.colors.green} Servidor rodando em http://${config.hostname}:${config.server_port}/`);
    console.log(` ${config.colors.green} Para derrubar o servidor: ctrl + c`);
});