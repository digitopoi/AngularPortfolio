import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../models/portfolio.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public portfolio: Portfolio;
  public logOpen: boolean = true;

  public ngOnInit(): void {
    this.portfolio = {
      firstName: 'Hugh',
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
      changeLog: [
        //  colors: #10A2F5
        {
          color: '#EB4888',
          month: 'January',
          year: '2018',
          highlight: 'Gratuated from the Eleven Fifty Academy on the .NET track',
          details: 'Built projects using ASP.NET MVC, Web API 2, Angular, and SQL'
        },
        {
          color: '#10A2F5',
          year: '2016-2017',
          highlight: 'Lived in St. Petersburg Russia and taught English',
        },
        {
          color: '#24D05A',
          year: '2014-2015',
          highlight: 'Field Archaeologist at the William and Mary Center for Archaeological Investigations',
          details: 'Worked on various cultural resource management projects in Virginia, Maryland, and North Carolina'
        },
        {
          color: '#10A2F5',
          month: 'December',
          year: '2013',
          highlight: 'Graduated with a BA in Anthropology',
          details: 'Minored in GIS, first was introduced to programming through Python'
        },
      ],
      updates: [
        {
          description: 'GiftHub',
          link: 'gifthubproject.herokuapp.com'
        },
        {
          description: 'OneOff',
          link: ''
        },
        {
          description: 'Parts In Parcels',
          link: 'http://partsinparcels.apphb.com/'
        },
        {
          description: 'Bank App',
          link: 'https://github.com/digitopoi/BankOfMurica'
        },
        {
          description: 'YelpCamp',
          link: 'http://nameless-crag-60559.herokuapp.com/'
        }
      ],
      // tslint:disable-next-line:max-line-length
      speakerBio: `I'm a former archaeologist transitioning to a career in web development. I was introduced to programming in my former career by writing small Python scripts to automate GIS tasks and I soon found a passion for programming and began expirimenting with web development in my free time. Eventually, I found that this would be a career to pursue and enrolled in a bootcamp at Eleven Fifty Academy in Fishers, IN on the .NET track. This experience has helped me bridge the game from a self-taught web developer to a competent developer with training in best practices, maintainability / extensibility, and collaboration.`,
    };
  }

  public toggleOpen(valueToToggle: string): void {
    switch (valueToToggle) {
      case 'logOpen':
        this.logOpen = !this.logOpen;
    }
  }

}
