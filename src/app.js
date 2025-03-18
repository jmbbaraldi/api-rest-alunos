import express from 'express';
import { resolve } from 'path';
import cors from 'cors';
import delay from 'express-delay';
import Routes from './routes/index';
import './database';

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

const app = express();

app.use(cors(corsOptions));
app.use(delay(600));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(resolve(process.cwd(), 'uploads', 'images')));
Routes(app);

export default app;
