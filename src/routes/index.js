import homeRoutes from './homeRoutes';
import userRoutes from './userRoutes';
import tokenRoutes from './tokenRoutes';
import alunoRoutes from './alunoRoutes';
import fotoRoutes from './fotoRoutes';

function Routes(app) {
  app.use('/', homeRoutes);
  app.use('/users/', userRoutes);
  app.use('/tokens/', tokenRoutes);
  app.use('/alunos/', alunoRoutes);
  app.use('/fotos/', fotoRoutes);
}

export default Routes;
