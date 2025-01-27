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
  cards: AdCard[] = [
    {
      title: 'No Stupid Questions',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: '',
    },
    {
      title: 'Need a New Site?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: '',
    },
    {
      title: 'Got an Idea for a New App?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: '',
    },
    {
      title: 'Need Help Transferring a Domain',
      description: '',
      imageUrl: '',
    },
    {
      title: 'Need Advice on Selecting a Host',
      description: '',
      imageUrl: '',
    },
    {
      title: 'Need Help with a WordPress Site',
      description: '',
      imageUrl: '',
    },
    {
      title: 'What Type of Site is Right for you?',
      description: '',
      imageUrl: '',
    },
    {
      title: 'Database Issues?',
      description: '',
      imageUrl: '',
    },
    {
      title: 'Need Help with SEO?',
      description: '',
      imageUrl: '',
    },
  ];
}
