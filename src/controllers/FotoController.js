import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

const store = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ errors: [err.code] });
    }

    const { originalname, filename } = req.file;
    const { aluno_id } = req.body;
    const foto = await Foto.create({ originalname, filename, aluno_id });

    return res.json(foto);
  });
};

export default {
  store,
};
