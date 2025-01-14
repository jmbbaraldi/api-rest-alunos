"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _path = require('path');
var _index = require('./routes/index'); var _index2 = _interopRequireDefault(_index);
require('./database');

const app = _express2.default.call(void 0, );

app.use(_express2.default.urlencoded({ extended: true }));
app.use(_express2.default.json());
app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads')));
_index2.default.call(void 0, app);

exports. default = app;
