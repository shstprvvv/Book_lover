import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import path from 'path';
import jsxRender from './utils/jsxRender';
import resLocals from './middlewares/resLocals';
import indexRouter from './routes/indexRouter';
import apiRouter from './routes/apiRouter';
import apiAuthRouter from './routes/api/apiAuthRouter';
import cookieParser from 'cookie-parser';
import bookPageRouter from './routes/bookPageRouter';

require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3000;
const app = express();
const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));
app.use(resLocals);

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/api/auth', apiAuthRouter);
app.use('/bookpage', bookPageRouter);



app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
