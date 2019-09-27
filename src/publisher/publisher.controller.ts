import { Controller, Get, Param, Delete, Put, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Publisher } from './publisher.entity';
import { PublisherService } from './publisher.service';
import { Response } from 'express';

@Controller('publishers')
export class PublisherController {

  constructor(private publisherService :PublisherService) {
  }

  @Get(':id')
  async findOne(@Param('id')id :number): Promise<Publisher> {
    return await this.publisherService.findOne(id);
  }

  @Post()
  async create(@Res() response: Response, @Body() game: Publisher) {
    const out = await this.publisherService.createPublisher(game).catch(err => response.status(HttpStatus.CONFLICT).send());
    response.send(out);
  }

  @Put()
  async update(@Res() response: Response, @Body() game: Publisher) {
    const out = await this.publisherService.updatePublisher(game).catch(err => response.status(HttpStatus.CONFLICT).send());
    response.send(out);
  }

  @Delete(':id')
  async delete(@Res() response: Response, @Param('id') id: number) {
    const out = await this.publisherService.deletePublisher(id).catch(err => response.status(HttpStatus.CONFLICT).send());
    response.send(out);
  }
}
