import { Controller, Get, Param, Delete, Put, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Publisher } from './publisher.entity';
import { PublisherService } from './publisher.service';
import { Response } from 'express';

@Controller('publishers')
export class PublisherController {

  constructor(private publisherService: PublisherService) {
  }

  @Get()
  findAll(): Promise<Publisher[]> {
    return this.publisherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Publisher> {
    return this.publisherService.findOne(id);
  }

  @Post()
  create(@Res() response: Response, @Body() game: Publisher) {
    const out = this.publisherService.createPublisher(game).catch(err => response.status(HttpStatus.BAD_REQUEST).send());
    response.send(out);
  }

  @Put()
  update(@Res() response: Response, @Body() game: Publisher) {
    const out = this.publisherService.updatePublisher(game).catch(err => response.status(HttpStatus.BAD_REQUEST).send());
    response.send(out);
  }

  @Delete(':id')
  delete(@Res() response: Response, @Param('id') id: number) {
    const out = this.publisherService.deletePublisher(id).catch(err => response.status(HttpStatus.BAD_REQUEST).send());
    response.send(out);
  }
}
