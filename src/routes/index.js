import homeRoutes from './homeRoutes';
import userRoutes from './userRoutes';
import tokenRoutes from './tokenRoutes';

function Routes(app) {
  app.use('/', homeRoutes);
  app.use('/users/', userRoutes);
  app.use('/tokens/', tokenRoutes);
}

export default Routes;
