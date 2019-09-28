import { Injectable } from '@nestjs/common';
import { Cron, Interval, NestSchedule } from 'nest-schedule';
import { GameHelper } from 'src/game/game.helper';

@Injectable()
export class GameScheduleService extends NestSchedule {

  constructor(private gameHelper: GameHelper) {
    super();
  }

  /**
   * Each day, replay multiple times in case of failure
   */
  @Cron('0 0-4 * * *', {

    startTime: new Date(),
    endTime: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
  })
  async cronJob() {
    console.log('executing cron job removeOldGames');
    this.gameHelper.removeOldGames();
  }

  @Interval(5000)
  intervalJob() {
    this.gameHelper.removeOldGames();

    // if you want to cancel the job, you should return true;
    return false;
  }


}