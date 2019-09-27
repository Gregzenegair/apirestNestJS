import { Controller, Get, Param, Delete, Put, Post, Body, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Game } from './game.entity';
import { GameService } from './game.service';

@Controller('games')
export class GameController {

  constructor(private gameService :GameService) {
  }

  @Get()
  findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Post()
  create(@Body() game: Game) {
      let createdGame = this.gameService.createGame(game);
      return createdGame;     
  }

  @Put()
  update(@Body() game: Game) {
      return this.gameService.updateGame(game);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
      return this.gameService.deleteGame(params.id);
  }
}
