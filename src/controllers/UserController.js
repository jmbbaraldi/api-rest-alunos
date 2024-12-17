import User from '../models/User';

const index = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (e) {
    return res.json(null);
  }
};

const show = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;
    const user = await User.findByPk(id);
    return res.json(user);
  } catch (e) {
    return res.json(null);
  }
};

const store = async (req, res) => {
  try {
    const novoUser = await User.create(req.body);
    res.json(novoUser);
  } catch (e) {
    res.status(400).json({
      errors: e.errors.map((err) => err.message),
    });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      return res.status(400).json({
        errors: ['Missing ID.'],
      });
    }

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(400).json({
        errors: ['User does not exists!'],
      });
    }

    const novosDados = await user.update(req.body);

    return res.json(novosDados);
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
        errors: ['Missing ID.'],
      });
    }

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(400).json({
        errors: ['User does not exists!'],
      });
    }

    await user.destroy();
    return res.json(user);
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
