const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../model/userModel');
const config = require('../settings/enviroment');

// Funções auxiliares
const createUserToken = (userId) => {
    return jwt.sign({ id: userId }, config.jwt_pass, { expiresIn: config.jwt_expires_in });
}

const create = async(req, res) => {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).send({ error: 'Dados insuficientes!' });

    try {
        if (await User.findOne({ email })) return res.status(400).send({ error: 'Usuário já registrado!' });

        const user = new User(req.body);
        await user.save();
        user.password = undefined;
        return res.status(201).send({ user, token: createUserToken(user._id) });
    } catch (error) {
        return res.status(500).send({ error: 'Erro ao buscar usuário!' });
    }
}

const auth = async(req, res) => {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).send({ error: 'Dados insuficientes!' });

    try {
        const user = await User.findOne({ email }).select('+password');
        if (!user) return res.status(400).send({ error: 'Usuário não registrado!' });

        const pass_ok = await bcrypt.compare(password, user.password);
        if (!pass_ok) return res.status(401).send({ error: 'Erro ao autenticar usuário!' });

        user.password = undefined;
        return res.send({ user, token: createUserToken(user.id) }); // status 200 automático

    } catch (error) {
        return res.status(500).send({ error: 'Erro ao buscar usuário' });
    }
}

module.exports = {
    create,
    auth
};