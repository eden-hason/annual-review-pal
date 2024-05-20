import {Injectable, OnModuleInit} from '@nestjs/common';
import axios from 'axios';
import {randomCommits} from "./stub/gitHubData";
@Injectable()
export class AppService implements OnModuleInit {

  userTickets: any;
  async onModuleInit() {
    this.userTickets = await this.getUserTickets();
  }

  async getUserTickets() {
    if (!this.userTickets){
      const response = await axios.get(
          'https://jira.tipalti.com:7000/rest/api/latest/search?jql=assignee=currentuser()',
          { headers: { Authorization: `Bearer ${process.env.JIRA_KEY}` } },
      );
      this.userTickets = response.data;
    }
    console.log('userTickets', this.userTickets);
    return this.userTickets;
  }
  getHello(): string {
    return 'Hello World!';
  }

  async getCommits(owner, repo: string): Promise<any[]> {
    const token = process.env.GITHUB_TOKEN;
    const usersurl = `https://api.github.com/users/${owner}`;

    try {
      const response = await axios.get(usersurl, {
        headers: {
          Authorization: `token ${token}`,
        },
      });

      // console.log('user', response.data);
    } catch (error) {
      console.error(`Error fetching user data: ${error.message}`);
    }

    let commits = [];
    try {
      try {
        // const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
        // const response = await axios.get(url, {
        //   headers: {
        //     Authorization: `token ${token}`,
        //   },
        //   params: {
        //     per_page: 50,
        //   },
        // });
        //
        // commits = response.data;
      }
      catch (error) {
        //console.error(`Error fetching commits: ${error.message}`);
      }
      //the stub data
      commits = randomCommits(owner,'ticket');
      const mappedCommits = commits.map(commit => {
        const lines = commit.files.reduce((acc, file) => acc + file.additions + file.deletions + file.changes, 0);

        return {
          sha: commit.sha,
          author: commit.commit.author.name,
          message: commit.commit.message,
          date: commit.commit.author.date,
          url: commit.html_url,
          lines: lines,
        }
      });
      // console.log(mappedCommits);
      return mappedCommits;
    } catch (error) {
      console.error(`Error in get commits: ${error.message}`);
    }
    }
  async getLatestCommits(token: string, limit = 50) {
    try {
      const owner = 'alyonachernyshev';
      const repo = 'your-repository-name';
      let commits = this.getCommits(owner, repo);

      // Sort commits by date (most recent first)
      // @ts-ignore
     // commits.sort((a, b) => new Date(b.date) - new Date(a.date));
      return commits; // Return only the latest 'limit' commits
    } catch (error) {
      console.error(`Error fetching commits: ${error.message}`);
      throw error;
    }
  }
}
