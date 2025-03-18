"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _path = require('path');
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _expressdelay = require('express-delay'); var _expressdelay2 = _interopRequireDefault(_expressdelay);
var _index = require('./routes/index'); var _index2 = _interopRequireDefault(_index);
require('./database');

const whiteList = ['http://localhost:3001'];

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

const app = _express2.default.call(void 0, );

app.use(_cors2.default.call(void 0, corsOptions));
app.use(_expressdelay2.default.call(void 0, 600));
app.use(_express2.default.urlencoded({ extended: true }));
app.use(_express2.default.json());
app.use(_express2.default.static(_path.resolve.call(void 0, process.cwd(), 'uploads', 'images')));
_index2.default.call(void 0, app);

exports. default = app;
