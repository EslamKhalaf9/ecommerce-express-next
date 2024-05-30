import express from 'express';
import router from './routes';

const app = express();
app.use(express.json());

app.use('/api', router);

// Error handling middleware
app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(error);
  return res.status(500).json({ message: 'Something went wrong' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});