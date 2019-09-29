import { Controller, Get, Param, Delete, Put, Post, Body, Res, HttpStatus, HttpException } from '@nestjs/common';
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
  async findOne(@Param('id') id: number): Promise<Publisher> {
    let result = await this.publisherService.findOne(id);
    if (null != result) {
      return result;
    } else {
      throw new HttpException("Publisher not found", HttpStatus.NOT_FOUND);
    }
  }

  @Post()
  async create(@Body() game: Publisher) {
    const result = await this.publisherService.createPublisher(game);
    if (result) {
      return result;
    } else {
      throw new HttpException("Publisher not created", HttpStatus.BAD_REQUEST);
    }
  }

  @Put()
  async update(@Body() game: Publisher) {
    const result = await this.publisherService.updatePublisher(game);
    if (result) {
      return result;
    } else {
      throw new HttpException("Publisher not updated", HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const result = await this.publisherService.deletePublisher(id);
    if (result) {
      return result;
    } else {
      throw new HttpException("Publisher not deleted", HttpStatus.NOT_FOUND);
    }
  }

}
