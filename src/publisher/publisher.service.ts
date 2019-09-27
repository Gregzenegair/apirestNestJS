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

    async getUser(id: number): Promise<Publisher[]> {
        return await this.publisherRepository.find({
            where: [{ "id": id }]
        });
    }

    async createPublisher(user: Publisher) {
        this.publisherRepository.save(user)
    }

    async updatePublisher(user: Publisher) {
        this.publisherRepository.save(user)
    }

    async deletePublisher(user: Publisher) {
        this.publisherRepository.delete(user);
    }
}