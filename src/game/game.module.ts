import { GameController } from "./game.controller";
import { GameService } from "./game.service";
import { Module } from "@nestjs/common";
import { Game } from "./game.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GameHelper } from "./game.helper";
import { GameScheduleService } from "./game.schedule";

@Module({
    imports: [TypeOrmModule.forFeature([Game])],
    controllers: [GameController],
    providers: [GameService, GameScheduleService, GameHelper]
  })
  
  export class GameModule {}