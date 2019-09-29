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
        return await this.publisherRepository.save(publisher);
    }

    async updatePublisher(publisher: Publisher) {
        if (null == publisher.id) {
            return null;
        }
        let existingPublisher = await this.findOne(publisher.id);
        if (null == existingPublisher) {
            return null;
        }
        return await this.publisherRepository.save(publisher);
    }

    async deletePublisher(id: number) {
        return await this.publisherRepository.delete(id);
    }
}