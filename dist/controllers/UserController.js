"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

const index = async (req, res) => {
  try {
    const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });
    return res.json(users);
  } catch (e) {
    return res.json(null);
  }
};

const show = async (req, res) => {
  try {
    const user = await _User2.default.findByPk(req.params.id ? req.params.id.toString().replace(/\D/g, '') : null);
    const { id, nome, email } = user;
    return res.json({ id, nome, email });
  } catch (e) {
    return res.json(null);
  }
};

const store = async (req, res) => {
  try {
    const novoUser = await _User2.default.create(req.body);
    const { id, nome, email } = novoUser;
    return res.json({ id, nome, email });
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
};

const update = async (req, res) => {
  try {
    const user = await _User2.default.findByPk(req.userId);

    if (!user) {
      return res.status(400).json({
        errors: ['User does not exists!'],
      });
    }

    const novosDados = await user.update(req.body);
    const { id, nome, email } = novosDados;
    return res.json({ id, nome, email });
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
};

const destroy = async (req, res) => {
  try {
    const user = await _User2.default.findByPk(req.userId);

    if (!user) {
      return res.status(400).json({
        errors: ['User does not exists!'],
      });
    }

    await user.destroy();
    return res.json(null);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
};

exports. default = {
  index,
  show,
  store,
  update,
  destroy,
};
