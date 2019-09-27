import { Module } from "@nestjs/common";
import { Publisher } from "./publisher.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PublisherService } from "./publisher.service";
import { PublisherController } from "./publisher.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Publisher])],
    controllers: [PublisherController],
    providers: [PublisherService],
  })
  
  export class PublisherModule {}