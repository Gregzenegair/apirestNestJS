import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Game } from "./game.entity";

@Injectable()
export class GameService {

    constructor(
        @InjectRepository(Game)
        private readonly gameRepository: Repository<Game>,
    ) {}

    async findAll(): Promise<Game[]> {
        return this.gameRepository.find();
    }

    async getUser(id: number): Promise<Game[]> {
        return await this.gameRepository.find({
            where: [{ "id": id }]
        });
    }

    async createGame(user: Game) {
        this.gameRepository.save(user)
    }

    async updateGame(user: Game) {
        this.gameRepository.save(user)
    }

    async deleteGame(user: Game) {
        this.gameRepository.delete(user);
    }
}