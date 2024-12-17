import Aluno from '../models/Aluno';

const index = (req, res) => {
  res.json({
    tudoCerto: true,
  });
};

export default {
  index,
};
