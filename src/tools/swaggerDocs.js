const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "0.0.1",
            title: "Notícias",
            description: "Documentação da API",
            contact: {
                name: "Cleiton Paiva",
                url: "https://br.linkedin.com/in/cleitonpaiva",
                email: "cleibp@gmail.com"
            },
            license: {
                name: "ISC",
                url: "https://opensource.org/licenses/ISC"
            }
        },
        servers: ["http://localhost:3000"]
    },
    apis: ['./src/routes/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}