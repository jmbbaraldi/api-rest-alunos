import homeRoutes from './homeRoutes';
import userRoutes from './userRoutes';

function Routes(app) {
  app.use('/', homeRoutes);
  app.use('/users/', userRoutes);
}

export default Routes;
