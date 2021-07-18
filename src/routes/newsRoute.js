const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const auth = require('../middlewares/auth');

/**
 * @swagger
 * /:
 *   get:
 *     summary: Rota Padrão
 *     description:  Rota Padrão
 */
router.get('/', (req, res) => {
    res.json({ "message": "Bem vindo a rota padrão!" });
});


/**
 * @swagger
 * paths:
 *  /news:
 *      get:
 *          tags:
 *              - news
 *          summary: Listar as notícias
 *          description: Retorna as notícias
 *          responses:
 *              '200':
 *                  description: Retorna a lista de notícias.
 *              '401':
 *                  description: Erro ao listar as notícias.
 */
router.route('/news').get(newsController.get);


/**
 * @swagger
 * paths:
 *  /news:
 *      post:
 *          tags:
 *              - news
 *          summary: Salvar uma notícia
 *          description: Criando uma notícia
 *          parameters:
 *          - in: "body"
 *            name: "body"
 *            description: "Objeto que você precisa adicionar para a notícia"
 *            required: true
 *            schema:
 *              $ref: "#/definitions/News"
 *          responses:
 *              '200':
 *                  description: Notícia criada com sucesso.
 *              '401':
 *                  description: Erro ao criar uma notícia.
 */
router.route('/news').post(auth, newsController.add);

/**
 * @swagger
 * paths:
 *  /news/{id}:
 *      get:
 *          tags:
 *              - news
 *          summary: Buscar notícia por id
 *          description: Buscar notícia por id
 *          parameters:
 *          - name: "id"
 *            in: "path"
 *            description: "Id da Notícia para a busca"
 *            required: true
 *          responses:
 *              '200':
 *                  description: Notícia encontrada com sucesso.
 *              '400':
 *                  description: Id informado inválido.
 *              '404':
 *                  description: Notícia não encontrada.
 */
router.route('/news/:id').get(auth, newsController.getById);

/**
 * @swagger
 * paths:
 *  /news/{id}:
 *      put:
 *          tags:
 *              - news
 *          summary: Atualizar a notícia
 *          description: Atualizar a notícia
 *          parameters:
 *           - name: "id"
 *             in: "path"
 *             description: "Id da Notícia para atualizar"
 *             required: true
 *          responses:
 *              '400': 
 *                  description: Id informado invalido.
 *              '404':
 *                  description: Notícia não encontrada.
 */
router.route('/news/:id').put(auth, newsController.update);

/**
 * @swagger
 * paths:
 *  /news/{id}:
 *      delete:
 *          tags:
 *              - news
 *          summary: Remover a notícia
 *          description: Remover a notícia
 *          parameters:
 *           - name: "id"
 *             in: "path"
 *             description: "Id da Notícia para remover"
 *             required: true
 *          responses:
 *              '400': 
 *                  description: Id informado invalido.
 *              '404':
 *                  description: Notícia não encontrada.
 */
router.route('/news/:id').delete(auth, newsController.del);

/**
 * @swagger
 * definitions:
 *  News:
 *   type: "object"
 *   properties:
 *     id:
 *       type: "string"
 *     title:
 *       type: "string"
 *     description:
 *       type: "string"
 *     ativo:
 *       type: "boolean"
 *       default: "true"
 *     created:
 *       type: "string"
 *       format: "date-time"
 *   xml:
 *     name: "News"
 */


module.exports = router;