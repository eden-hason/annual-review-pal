import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/userTickets')
  async getUserTickets() {
    const userTickets = await this.appService.getUserTickets();
    return userTickets;
  }

  @Get('/userCommits')
  async getUserCommits() {
    console.log('inside getUserCommits');
    return this.appService.getLatestCommits('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');
  }
}
