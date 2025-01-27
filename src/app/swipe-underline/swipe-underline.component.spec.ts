import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeUnderlineComponent } from './swipe-underline.component';

describe('SwipeUnderlineComponent', () => {
  let component: SwipeUnderlineComponent;
  let fixture: ComponentFixture<SwipeUnderlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwipeUnderlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwipeUnderlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
