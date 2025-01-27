import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-swipe-underline',
  standalone: true,
  imports: [],
  templateUrl: './swipe-underline.component.html',
  styleUrl: './swipe-underline.component.css',
})
export class SwipeUnderlineComponent {
  @Input() width: number = 0;
}
