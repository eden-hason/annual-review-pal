import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/userTickets')
  async getUserTickets() {
    const response = await axios.get(
      'https://jira.tipalti.com:7000/rest/api/latest/search?jql=assignee=currentuser()',
      { headers: { Authorization: `Bearer ${process.env.JIRA_KEY}` } },
    );

    return response.data;
  }

  @Get('/userCommits')
  async getUserCommits() {
    console.log('inside getUserCommits');

    return this.appService.getLatestCommits('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');
  }
}
