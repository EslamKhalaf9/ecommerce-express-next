import express from 'express';
import router from './routes';
import { getErrorByCode } from './utils/errors';

const app = express();
app.use(express.json());

app.use('/api', router);

// Error handling middleware
app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
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