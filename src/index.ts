import express from 'express';
import session from 'express-session';
import router from './routes';
import { getErrorByCode } from './utils/errors';
import { randomUUID } from 'crypto';

const app = express();
app.use(express.json());

app.use(session({
  cookie: {
    path: '/',
    httpOnly: true,
    secure: false,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  },
  secret: process.env.SESSION_SECRET!,
  resave: true,
  saveUninitialized: false,
  genid: () => {
    return randomUUID();
  },
}));

app.use('/api', router);

// Error handling middleware
app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(error);
  const errorObj = getErrorByCode(error.message);
  res.status(errorObj.status).json({
    success: false,
    status: errorObj.status,
    message: errorObj.message,
    code: errorObj.code,
    stack: process.env.NODE_ENV === 'development' ? error.stack : {}
  })
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});