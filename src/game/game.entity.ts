import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Publisher } from 'src/publisher/publisher.entity';
import { Type } from 'class-transformer';

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