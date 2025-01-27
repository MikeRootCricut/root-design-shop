import { Component } from '@angular/core';
import { SwipeUnderlineComponent } from '../swipe-underline/swipe-underline.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SwipeUnderlineComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
