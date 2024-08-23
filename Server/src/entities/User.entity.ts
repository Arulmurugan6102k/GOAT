import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

@Entity('products')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true})
  username!: string;

  @Column()
  email! : string;

  @Column()
  password! : string;
  
  @Column({
    type : 'enum',
    enum : Role,
    default : Role.USER
  })
  role! : Role;
}