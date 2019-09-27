import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Publisher } from 'src/publisher/publisher.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 256 })
  title: string;

  @Column()
  price: number;

  @Column()
  tags: string;

  @ManyToOne(type => Publisher, publisher => publisher.games)
  publisher: Publisher;

  @Column()
  releaseDate: Date;
}