"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

const index = async (req, res) => {
  const alunos = await _Aluno2.default.findAll({
    attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
    order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
    include: {
      model: _Foto2.default,
      attributes: ['url', 'filename'],
    },
  });
  res.json(alunos);
};

const show = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      res.status(400).json({
        errors: ['Missing ID!'],
      });
    }

    const aluno = await _Aluno2.default.findByPk(id, {
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
      include: {
        model: _Foto2.default,
        attributes: ['url', 'filename'],
      },
    });
    if (!aluno) {
      return res.status(400).json({
        errors: ['Aluno does not exists!'],
      });
    }

    return res.json(aluno);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
};

const store = async (req, res) => {
  try {
    const aluno = await _Aluno2.default.create(req.body);

    return res.json(aluno);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      return res.status(400).json({
        errors: ['Missing ID!'],
      });
    }

    const aluno = await _Aluno2.default.findByPk(id);
    if (!aluno) {
      return res.status(400).json({
        errors: ['Aluno does not exists!'],
      });
    }

    const updateAluno = await aluno.update(req.body);

    return res.json(updateAluno);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
};

const destroy = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      return res.status(400).json({
        errors: ['Missing ID!'],
      });
    }

    const aluno = await _Aluno2.default.findByPk(id);
    if (!aluno) {
      return res.status(400).json({
        errors: ['Aluno does not exists!'],
      });
    }

    await aluno.destroy();
    return res.json({
      Deleted: 'true',
    });
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
