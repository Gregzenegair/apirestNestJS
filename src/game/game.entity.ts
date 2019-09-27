import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Publisher } from 'src/publisher/publisher.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 256 })
  title: string;

  @Column()
  price: number;

  @Column()
  tags: string;

  @ManyToOne(type => Publisher, publisher => publisher.games, {eager : true})
  publisher: Publisher;

  @Column()
  releaseDate: Date;
}