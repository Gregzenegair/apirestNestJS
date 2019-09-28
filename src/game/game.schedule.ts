import { Injectable } from '@nestjs/common';
import { Cron, Interval, NestSchedule } from 'nest-schedule';
import { GameHelper } from 'src/game/game.helper';

@Injectable()
export class GameScheduleService extends NestSchedule {

  constructor(private gameHelper: GameHelper) {
    super();
  }

  @Interval(5000)
  intervalJob() {
    // this.gameHelper.removeOldGames();

    // this.gameHelper.applyDiscount();

    // if you want to cancel the job, you should return true;
    return false;
  }


}