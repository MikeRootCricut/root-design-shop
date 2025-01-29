import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { AdCard } from '../models/AdCard';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CardComponent, NgFor, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  //TODO: change this to real data
  cards: AdCard[] = [
    {
      title: 'No Stupid Questions',
      description:
        'We all have knowledge gaps.  Dont worry about asking a "stupid" question.  Were here to help and our experts will take the time to guide you through the process.',
      imageUrl: '../../assets/the_thinker.jpg',
    },
    {
      title: 'Need a New Site?',
      description:
        'Whether youre starting a new business, or just need a fresh look to your existing site, we can help.  We can create a custom look that reflects your brand and meets all of your technical needs.',
      imageUrl: '../../assets/website.jpg',
    },
    {
      title: 'Got an Idea for a New App?',
      description:
        'Maybe all youve got is an idea, and you need someone to help you bring that idea to life.  We can help you identify how possible your idea is and how much time itd take to develope.',
      imageUrl: '../../assets/apps.jpg',
    },
    {
      title: 'Need Help Transferring a Domain',
      description:
        'Maybe youd like to transfer your domain name from another registrar to another.  We can help you through that process.',
      imageUrl: '../../assets/domain-names_cropped.png',
    },
    {
      title: 'Need Advice on Selecting a Host',
      description:
        'There are so many hosts out there, its hard to know where to start.  We can help you make the right choice.',
      imageUrl: '../../assets/nerd.jpg',
    },
    {
      title: 'Need Help with a WordPress Site',
      description: 'Do you have an existing WordPress site?  Or maybe you need help standing up a new Wordpress site, or maybe you just need help migrating a Wordpress site.',
      imageUrl: '../../assets/wordpress.jpg',
    },
    {
      title: 'What Type of Site is Right for you?',
      description: 'Theres all sorts of different sites: e-commerce, blog, corporate, etc.  We can help you find the right type of site at the right price for you.',
      imageUrl: '../../assets/sites_cropped.png',
    },
    {
      title: 'Database Issues?',
      description: 'Whether you have a SQL server, NoSQL database, or something in between, we can help.  We can migrate, optimize, and secure your data.',
      imageUrl: '../../assets/database_cropped.jpg',
    },
    {
      title: 'Need Help with SEO?',
      description: 'Search Engine Optimization (SEO) is the process of improving the quality and quantity of website traffic to a website.  We can help you with that.',
      imageUrl: '../../assets/seo_cropped.jpg',
    },
  ];
}
