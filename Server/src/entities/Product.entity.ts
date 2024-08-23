// import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// @Entity('products')
// export class Product {
//   @PrimaryGeneratedColumn()
//   id?: number;

//   @Column({ type: 'varchar', length: 255, nullable: true })
//   productName?: string;

//   @Column({ type: 'int', nullable: true })
//   mainCatId?: number;

//   @Column({ type: 'int', nullable: true })
//   subCatId?: number;

//   @Column({ type: 'int', nullable: true })
//   companyId?: number;

//   @Column({ type: 'int', nullable: true })
//   price?: number;

//   @Column({ type: 'int', nullable: true })
//   currentVersion?: number;

//   @Column({ type: 'varchar', length: 50, nullable: true })
//   colors?: string;

//   @Column({ type: 'varchar', length: 50, nullable: true })
//   sizes?: string;

//   @Column({ type: 'varchar', length: 50, nullable: true })
//   includes?: string;

//   @Column({ type: 'varchar', length: 255, nullable: true })
//   productTags?: string;

//   @Column({ type: 'varchar', length: 255, nullable: true })
//   productDescription?: string;

//   @Column({ type: 'varchar', length: 50, nullable: true })
//   mainImagePath?: string;

//   @Column({ type: 'varchar', length: 255, nullable: true })
//   subImagesPath?: string;

//   @Column({ type: 'int', default: 0 })
//   isDeleted?: number;

//   @Column({ type: 'int', default: 0 })
//   isActive?: number;
// }
