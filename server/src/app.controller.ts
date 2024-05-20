import { Controller, Get, Param, Query } from '@nestjs/common';
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

  @Get('/tickets-summary')
  async getTicketsSummary(@Query('accessToken') accessToken) {
    console.log('accessToken', accessToken);
    const response = await axios.get(
      'https://jira.tipalti.com:7000/rest/api/latest/search?jql=assignee=currentuser()',
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );

    return { ticketsAmount: 68, bugFixes: 22 };

    return response.data;
  }
}
