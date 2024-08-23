import { DataSource } from 'typeorm';
// import { Product } from './entities/product'; 
import { User } from './entities/User.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'admire',
  synchronize: true,
  logging: true,
  entities: [User], 
});
