import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-swipe-underline',
  standalone: true,
  imports: [],
  templateUrl: './swipe-underline.component.html',
  styleUrls: ['./swipe-underline.component.css'],
})
export class SwipeUnderlineComponent {
  @Input() width: number = 0;
  @Input() fillColor: string = 'white';
}
