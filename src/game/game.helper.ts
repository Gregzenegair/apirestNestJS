import { Injectable } from "@nestjs/common";
import { GameService } from "./game.service";
import { Game } from "./game.entity";

@Injectable()
export class GameHelper {

  constructor(private gameService: GameService) {
  }

  /**
   * Remove the games having a release date older than 18 months
   */
  removeOldGames(): void {
    let games: Promise<Game[]> = this.gameService.findOlderHeighteen();
    games.then(games => games.forEach(game => {
      console.log("Deleting too old game : " + game.title);
      this.gameService.deleteGame(game.id);
    }));
  }

}