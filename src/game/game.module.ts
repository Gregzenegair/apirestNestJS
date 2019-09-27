import { GameController } from "./game.controller";
import { GameService } from "./game.service";
import { Module } from "@nestjs/common";
import { Game } from "./game.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Game])],
    controllers: [GameController],
    providers: [GameService]
  })
  
  export class GameModule {}