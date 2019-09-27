import { Controller, Get, Param, Delete, Put, Post, Body, BadRequestException } from '@nestjs/common';
import { Publisher } from './publisher.entity';
import { PublisherService } from './publisher.service';

@Controller('publishers')
export class PublisherController {

  constructor(private publisherService :PublisherService) {
  }

  @Get()
  findAll(): Promise<Publisher[]> {
    return this.publisherService.findAll();
  }

  @Post()
  create(@Body() publisher: Publisher) {
    try {
      return this.publisherService.createPublisher(publisher);
    } catch (error) {
      throw new BadRequestException(error);
    }      
  }

  @Put()
  update(@Body() publisher: Publisher) {
      return this.publisherService.updatePublisher(publisher);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
      return this.publisherService.deletePublisher(params.id);
  }
}
