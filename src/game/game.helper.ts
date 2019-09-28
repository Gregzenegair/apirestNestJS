import { Injectable } from "@nestjs/common";
import { GameService } from "./game.service";
import { Game } from "./game.entity";

@Injectable()
export class GameHelper {

  private discountPercentage: number = 20;

  constructor(private gameService: GameService) {
  }

  /**
   * Remove the games having a release date older than 18 months
   */
  removeOldGames(): void {
    let minDate = new Date();
    minDate.setTime(0);

    let maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() - 18);

    let games: Promise<Game[]> = this.gameService.findBetweenDates(minDate, maxDate);
    games.then(games => games.forEach(game => {
      console.log("Deleting too old game : " + game.title + " realeased : " + game.releaseDate);
      this.gameService.deleteGame(game.id);
    }));
  }

  applyDiscount() {
    let minDate = new Date();
    minDate.setMonth(minDate.getMonth() - 18);

    let maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() - 12);

    let games: Promise<Game[]> = this.gameService.findBetweenDates(minDate, maxDate);
    games.then(games => games.forEach(game => {
      console.log("Discounting 20% game " + game.title + " realeased " + game.releaseDate + " which current prise is " + game.price);

      let newGamePrice = game.price - ((this.discountPercentage * game.price) / 100);
      game.price = newGamePrice;

      console.log("New game price for " + game.title + " is " + game.price);

      this.gameService.updateGame(game);
    }));
  }

}