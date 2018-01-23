import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../models/portfolio.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public portfolio: Portfolio;

  public ngOnInit(): void {
    this.portfolio = {
      firstName: 'Hugh',
      middleName: '',
      lastName: 'Bowman',
      subHeading: 'Full-stack .NET Developer',
      socialMedia: [
        {
          icon: 'fa fa-linkedin fa-2x',
          link: 'www.linkedin.com/in/hugh-bowman-009125125',
          color: '#0077B5'
        },
        {
          icon: 'fa fa-github fa-2x',
          link: 'https://github.com/digitopoi',
          color: '#6e5494'
        }
      ],
      introduction: `Hi, I'm Hugh Bowman. I'm an entry level developer specializing in ASP.NET on the backend and Angular on the frontend.`,
      changeLog: [],
      updates: [],
      // tslint:disable-next-line:max-line-length
      speakerBio: `I'm a former archaeologist transitioning to a career in web development. I was introduced to programming in my former career by writing small Python scripts to automate GIS tasks and I soon found a passion for programming and began expirimenting with web development in my free time. Eventually, I found that this would be a career to pursue and enrolled in a bootcamp at Eleven Fifty Academy in Fishers, IN on the .NET track. This experience has helped me bridge the game from a self-taught web developer to a competent developer with training in best practices, maintainability / extensibility, and collaboration.`,
    };
  }

}
