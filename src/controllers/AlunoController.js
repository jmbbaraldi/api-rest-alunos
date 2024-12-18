import Aluno from '../models/Aluno';

const index = async (req, res) => {
  const alunos = await Aluno.findAll();
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

    const aluno = await Aluno.findByPk(id);
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
    const aluno = await Aluno.create(req.body);

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

    const aluno = await Aluno.findByPk(id);
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

    const aluno = await Aluno.findByPk(id);
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

export default {
  index,
  show,
  store,
  update,
  destroy,
};
