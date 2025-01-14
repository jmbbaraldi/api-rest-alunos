"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _homeRoutes = require('./homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _userRoutes = require('./userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _tokenRoutes = require('./tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _alunoRoutes = require('./alunoRoutes'); var _alunoRoutes2 = _interopRequireDefault(_alunoRoutes);
var _fotoRoutes = require('./fotoRoutes'); var _fotoRoutes2 = _interopRequireDefault(_fotoRoutes);

function Routes(app) {
  app.use('/', _homeRoutes2.default);
  app.use('/users/', _userRoutes2.default);
  app.use('/tokens/', _tokenRoutes2.default);
  app.use('/alunos/', _alunoRoutes2.default);
  app.use('/fotos/', _fotoRoutes2.default);
}

exports. default = Routes;
