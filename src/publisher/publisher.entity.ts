import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsPhoneNumber } from 'class-validator';
import { Game } from '../game/game.entity';

@Entity()
export class Publisher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 256 })
  name: string;

  @Column('bigint')
  siret: number;

  @IsPhoneNumber(null)
  @Column({ length: 20 })
  phone: string;

  @OneToMany(type => Game, game => game.publisher)
  games: Game[];

}