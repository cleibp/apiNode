require('dotenv').config();

const env = process.env.NODE_ENV;
const hostname = process.env.HOST;
const server_port = process.env.PORT;
const bd_string = process.env.BD_STRING;
const jwt_pass = process.env.JWT_PASS;
const jwt_expires_in = process.env.JWT_EXPIRES_IN;
const saltRounds = process.env.SALT_ROUNDS;

const params = () => {
    switch (env) {
        case 'dev':
            return {
                hostname,
                server_port,
                colors: {
                    yellow: '\033[33m',
                    green: '\033[32m',
                    red: '\033[31m'
                },
                bd_string,
                jwt_pass,
                jwt_expires_in,
                saltRounds
            }
        case 'homo':
            return {
                hostname,
                server_port,
                colors: {
                    yellow: '\033[33m',
                    green: '\033[32m',
                    red: '\033[31m'
                },
                bd_string,
                jwt_pass,
                jwt_expires_in,
                saltRounds
            }
        case 'prod':
            return {
                hostname,
                server_port,
                colors: {
                    yellow: '\033[33m',
                    green: '\033[32m',
                    red: '\033[31m'
                },
                bd_string,
                jwt_pass,
                jwt_expires_in,
                saltRounds
            }
    }
}



console.log(` ${params().colors.green} Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = params();