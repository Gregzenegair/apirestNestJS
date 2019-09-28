import { Controller, Get, Param, Delete, Put, Post, Body, Res, HttpStatus, HttpCode, HttpException } from '@nestjs/common';
import { Game } from './game.entity';
import { GameService } from './game.service';
import { Response } from 'express';
import { Publisher } from '../publisher/publisher.entity';
import { GameHelper } from './game.helper';

@Controller('games')
export class GameController {

  constructor(private gameService: GameService, private gameHelper: GameHelper) {
  }

  @Get()
  findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Get(':id/publisher')
  async findOnePublisher(@Param('id') id: number): Promise<Publisher> {
    let game: Game = await this.gameService.findOne(id);
    let publisher: Publisher = game.publisher;
    return publisher;
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Game> {
    let result = await this.gameService.findOne(id);
    if (null != result) {
      return result;
    } else {
      throw new HttpException("Game not found", HttpStatus.NOT_FOUND);
    }
  }

  @Post()
  async create(@Body() game: Game) {
    const result = await this.gameService.createGame(game);
    if (result) {
      return result;
    } else {
      throw new HttpException("Game not created", HttpStatus.BAD_REQUEST);
    }
  }

  @Put()
  async update(@Body() game: Game) {
    const result = await this.gameService.updateGame(game);
    if (result) {
      return result;
    } else {
      throw new HttpException("Game not updated", HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const result = await this.gameService.deleteGame(id);
    console.log(result);
    if (result) {
      return result;
    } else {
      throw new HttpException("Game not deleted", HttpStatus.NOT_FOUND);
    }
  }

  @HttpCode(200)
  @Post('/triggerCleanProcess')
  deleteTooOldGames() {
    this.gameHelper.removeOldGames();
    this.gameHelper.applyDiscount();
  }
}
