import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { CardComponent } from '../card/card.component';
import { By } from '@angular/platform-browser';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsComponent, CardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with 9 cards', () => {
    expect(component.cards.length).toBe(9);
  });

  it('should render all cards', () => {
    const cardElements = fixture.debugElement.queryAll(By.directive(CardComponent));
    expect(cardElements.length).toBe(9);
  });

  it('should pass correct data to card components', () => {
    const firstCard = component.cards[0];
    const cardComponent = fixture.debugElement.query(By.directive(CardComponent));
    
    expect(cardComponent.componentInstance.title).toBe(firstCard.title);
    expect(cardComponent.componentInstance.description).toBe(firstCard.description);
    expect(cardComponent.componentInstance.imageUrl).toBe(firstCard.imageUrl);
  });

  it('should have valid image URLs for all cards', () => {
    component.cards.forEach(card => {
      expect(card.imageUrl).toBeTruthy();
      expect(card.imageUrl.startsWith('../../assets/')).toBeTruthy();
    });
  });
});
