const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @swagger
 * paths:
 *  /register:
 *      post:
 *          tags:
 *              - user
 *          summary: Cadastrar novo usuário
 *          description: Cadastrar novo usuário
 *          parameters:
 *          - in: "body"
 *            name: "body"
 *            description: "Objeto que você precisa adicionar para o usuário"
 *            required: true
 *            schema:
 *              $ref: "#/definitions/User"
 *          responses:
 *              '200':
 *                  description: Usuário criada com sucesso.
 *              '401':
 *                  description: Erro ao criar um usuário.
 */
router.route('/register').post(userController.create);

/**
 * @swagger
 * paths:
 *  /login:
 *      post:
 *          tags:
 *              - user
 *          summary: Cadastrar novo usuário
 *          description: Cadastrar novo usuário
 *          parameters:
 *          - in: "body"
 *            name: "body"
 *            description: "Objeto que você precisa adicionar para o usuário"
 *            required: true
 *            schema:
 *              $ref: "#/definitions/User"
 *          responses:
 *              '200':
 *                  description: Login realizado com sucesso.
 *              '401':
 *                  description: Erro ao fazer o login.
 */
router.route('/auth').post(userController.auth);

/**
 * @swagger
 * definitions:
 *  User:
 *   type: "object"
 *   properties:
 *     id:
 *       type: "string"
 *     nome:
 *       type: "string"
 *     email:
 *       type: "string"
 *     password:
 *       type: "string"
 *     created:
 *       type: "string"
 *       format: "date-time"
 *   xml:
 *     name: "User"
 */


module.exports = router;