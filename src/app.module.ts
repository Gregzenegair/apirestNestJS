import { Module } from '@nestjs/common';
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './game/game.module';
import { PublisherModule } from './publisher/publisher.module';

@Module({
  imports: [TypeOrmModule.forRoot(), GameModule, PublisherModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
