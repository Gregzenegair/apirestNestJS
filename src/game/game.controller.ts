import { Controller, Get, Param, Delete, Put, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Game } from './game.entity';
import { GameService } from './game.service';
import { Response } from 'express';
import { Publisher } from '../publisher/publisher.entity';

@Controller('games')
export class GameController {

  constructor(private gameService: GameService) {
  }

  @Get()
  findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Get(':id/publisher')
  async findOnePublisher(@Param('id') id: number): Promise<Publisher> {
    let game: Promise<Game> = this.gameService.findOne(id);
    let publisher: Publisher = null;
    await game.then(function(gamePromise) {
       publisher = gamePromise.publisher;
    });
    return publisher;
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Game> {
    return this.gameService.findOne(id);
  }

  @Post()
  create(@Res() response: Response, @Body() game: Game) {
    const out = this.gameService.createGame(game).catch(err => response.status(HttpStatus.BAD_REQUEST).send());
    response.send(out);
  }

  @Put()
  update(@Res() response: Response, @Body() game: Game) {
    const out = this.gameService.updateGame(game).catch(err => response.status(HttpStatus.BAD_REQUEST).send());
    response.send(out);
  }

  @Delete(':id')
  delete(@Res() response: Response, @Param('id') id: number) {
    const out = this.gameService.deleteGame(id).catch(err => response.status(HttpStatus.BAD_REQUEST).send());
    response.send(out);
  }
}
