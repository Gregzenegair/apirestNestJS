import { Controller, Get, Param, Delete, Put, Post, Body, Res, HttpStatus, HttpCode, HttpException } from '@nestjs/common';
import { Game } from './game.entity';
import { GameService } from './game.service';
import { Publisher } from './../publisher/publisher.entity';
import { GameHelper } from './game.helper';

/**
 * This component will expose a REST api providing CRUD operations to fetch one or several games,
 * create, update and delete a game. Though this api, it will also be possible:
 * - Fetch only the publisher data for a given game (without any publishers dedicated API – i.e. only by
 * using the game API)
 * - To trigger a process which will automatically remove the games having a release date older than 18
 * months and apply a discount of 20% to all games having a release date between 12 and 18 months.
 */
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
