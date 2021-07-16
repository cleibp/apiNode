const axios = require('axios');
const News = require('../model/newsModel');

async function getURLExtern() {
    try {
        const response = await axios.get('https://app.fakejson.com/q/QT2xlEoD?token=9M6e6vtngpF3WJJt2GWw4Q');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


const get = async(req, res) => {
    try {
        const news = await News.find();
        const url = await getURLExtern();
        let result = {
            news,
            url
        }
        res.status(200);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.send('Erro interno do servidor');
    }
};

const getById = async(req, res) => {
    try {
        const noticia = await News.findById(req.params.id);
        res.status(200);
        res.send(noticia);
    } catch (error) {
        console.error(error);
        res.status(404);
        res.send('Noticia não encontrada...');
    }
};

const add = async(req, res) => {
    try {
        const noticia = new News(req.body);
        const result = await noticia.save();
        res.status(201);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.send('Erro : falha ao incluir noticia...');
    }
};

const update = async(req, res) => {
    try {
        const noticia = await News.findById(req.params.id);
        if (noticia) {
            noticia.title = req.body.title;
            noticia.description = req.body.description;
            await noticia.save();
            res.status(200);
            res.send(noticia);
        } else {
            res.status(404);
            res.send('Noticia não encontrada...');
        }
        res.send(noticia);

    } catch (error) {
        console.error(error);
        res.status(500);
        res.send('Falha ao atualizar noticia...');
    }
};

const del = async(req, res) => {
    try {
        const noticia = await News.findById(req.params.id);
        if (noticia) {
            await noticia.remove();
            res.status(204);
            res.send('Noticia removida...');
        } else {
            res.status(404);
            res.send('Noticia não encontrada...');
        }
    } catch (error) {
        console.error(error);
        res.status(500);
        res.send('Falha ao remover noticia...');
    }
};

module.exports = {
    add,
    get,
    getById,
    update,
    del
};