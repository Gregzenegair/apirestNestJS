import { GameController } from "./game.controller";
import { GameService } from "./game.service";
import { Module } from "@nestjs/common";
import { Game } from "./game.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GameHelper } from "./game.helper";

@Module({
    imports: [TypeOrmModule.forFeature([Game])],
    controllers: [GameController],
    providers: [GameService, GameHelper]
  })
  
  export class GameModule {}