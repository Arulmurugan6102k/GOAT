import 'reflect-metadata';
import { AppDataSource } from './data-source';
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
// test commit
const app = express(); 
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));

// Initialize TypeORM
AppDataSource.initialize().then(async () => {
  
  console.log('Data Source has been initialized!');

  app.use('/api/user', userRoutes )

  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });

}).catch(error => console.log('Error during Data Source initialization:', error));
