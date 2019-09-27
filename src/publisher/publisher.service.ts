import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Publisher } from "./publisher.entity";

@Injectable()
export class PublisherService {

    constructor(
        @InjectRepository(Publisher)
        private readonly publisherRepository: Repository<Publisher>,
    ) {}

    async findAll(): Promise<Publisher[]> {
        return this.publisherRepository.find();
    }

    async findOne(id: number): Promise<Publisher> {
        return await this.publisherRepository.findOne(id);
    }

    async createPublisher(publisher: Publisher) {
        this.publisherRepository.save(publisher)
    }

    async updatePublisher(publisher: Publisher) {
        this.publisherRepository.save(publisher)
    }

    async deletePublisher(id: number) {
        this.publisherRepository.delete(id);
    }
}