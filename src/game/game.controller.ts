import { Controller, Get, Param, Delete, Put, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Game } from './game.entity';
import { GameService } from './game.service';
import { Response } from 'express';
import { Publisher } from 'src/publisher/publisher.entity';

@Controller('games')
export class GameController {

  constructor(private gameService: GameService) {
  }

  @Get()
  async findAll(): Promise<Game[]> {
    return await this.gameService.findAll();
  }

  @Get(':id/publisher')
  async findOnePublisher(@Param('id') id: number): Promise<Object> {
    let game: Game = await this.gameService.findOne(id);
    let result: Publisher = null;
    if (null != result) {
      result = game.publisher;
    }
    return result;
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Game> {
    return await this.gameService.findOne(id);
  }

  @Post()
  async create(@Res() response: Response, @Body() game: Game) {
    const out = await this.gameService.createGame(game).catch(err => response.status(HttpStatus.BAD_REQUEST).send());
    response.send(out);
  }

  @Put()
  async update(@Res() response: Response, @Body() game: Game) {
    const out = await this.gameService.updateGame(game).catch(err => response.status(HttpStatus.BAD_REQUEST).send());
    response.send(out);
  }

  @Delete(':id')
  async delete(@Res() response: Response, @Param('id') id: number) {
    const out = await this.gameService.deleteGame(id).catch(err => response.status(HttpStatus.BAD_REQUEST).send());
    response.send(out);
  }
}
