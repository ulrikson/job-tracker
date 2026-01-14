import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getHealth } from './controllers/healthController';
import applicationRoutes from './routes/applicationRoutes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/applications', applicationRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Job Tracker API is running');
});

app.get('/health', getHealth);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
