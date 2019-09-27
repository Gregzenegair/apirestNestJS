import { Module } from '@nestjs/common';
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './game/game.module';
import { PublisherModule } from './publisher/publisher.module';
import { MyValidationPipe } from './validation.pipe';

@Module({
  imports: [TypeOrmModule.forRoot(), GameModule, PublisherModule, MyValidationPipe],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
