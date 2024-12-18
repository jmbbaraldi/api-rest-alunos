import homeRoutes from './homeRoutes';
import userRoutes from './userRoutes';
import tokenRoutes from './tokenRoutes';
import alunoRoutes from './alunoRoutes';

function Routes(app) {
  app.use('/', homeRoutes);
  app.use('/users/', userRoutes);
  app.use('/tokens/', tokenRoutes);
  app.use('/alunos/', alunoRoutes);
}

export default Routes;
