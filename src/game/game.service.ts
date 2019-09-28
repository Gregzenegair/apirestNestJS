import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, LessThan, MoreThan, Between } from "typeorm";
import { Game } from "./game.entity";

@Injectable()
export class GameService {

    constructor(
        @InjectRepository(Game)
        private readonly gameRepository: Repository<Game>,
    ) { }

    async findAll(): Promise<Game[]> {
        return this.gameRepository.find();
    }

    async findOne(id: number): Promise<Game> {
        return await this.gameRepository.findOne(id);
    }

    async createGame(game: Game) {
        return await this.gameRepository.save(game);
    }

    async updateGame(game: Game) {
        if (null == game.id) {
            return null;
        }
        let existingGame = await this.findOne(game.id);
        if (null == existingGame) {
            return null;
        }
        return await this.gameRepository.save(game);
    }

    async deleteGame(id: number) {
        return await this.gameRepository.delete(id);
    }

    findBetweenDates(minDate: Date, maxDate: Date): Promise<Game[]> {
        console.log("morethan mindate=" + minDate);
        console.log("lessthan maxDate=" + maxDate);
        return this.gameRepository.find({
            where: [{
                releaseDate: (Between(minDate, maxDate)),
            }]
        });
    }
}