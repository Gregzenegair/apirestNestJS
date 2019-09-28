import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Type } from 'class-transformer';
import { Publisher } from '../publisher/publisher.entity';

@Entity()
export class Game {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  @Column({type : 'varchar', length: 256 })
  title: string;

  @Column({ nullable: true })
  price: number;

  @Column({ nullable: true })
  tags: string;

  @Type((t) => Publisher)
  @ManyToOne(type => Publisher, publisher => publisher.games, {eager : true})
  publisher: Publisher;

  @Column({type : 'date', nullable: true })
  @Column()
  releaseDate: Date;
}