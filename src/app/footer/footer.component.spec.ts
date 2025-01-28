import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';
import { SwipeUnderlineComponent } from '../swipe-underline/swipe-underline.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent, SwipeUnderlineComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have three main sections', () => {
    const columns = fixture.debugElement.queryAll(By.css('.col-lg-2, .col-lg-7, .col-lg-3'));
    expect(columns.length).toBe(3);
  });

  it('should have correct section headings', () => {
    const headings = fixture.debugElement.queryAll(By.css('h3'));
    expect(headings.length).toBe(3);
    expect(headings[0].nativeElement.textContent).toBe('Services');
    expect(headings[1].nativeElement.textContent).toBe('Technical Resources Made Easy');
    expect(headings[2].nativeElement.textContent).toBe('Contact Us');
  });

  it('should have services list with correct items', () => {
    const servicesList = fixture.debugElement.query(By.css('.col-lg-2 ul'));
    const services = servicesList.queryAll(By.css('li'));
    expect(services.length).toBe(5);
    
    const serviceTexts = services.map(service => service.nativeElement.textContent.trim());
    expect(serviceTexts).toContain('New Sites');
    expect(serviceTexts).toContain('WordPress');
    expect(serviceTexts).toContain('SEO');
    expect(serviceTexts).toContain('Databases');
    expect(serviceTexts).toContain('New Apps');
  });

  it('should have correct contact information', () => {
    const contactSection = fixture.debugElement.query(By.css('.col-lg-3'));
    const contactItems = contactSection.queryAll(By.css('li'));
    
    expect(contactItems.length).toBe(2);
    expect(contactItems[0].nativeElement.textContent).toContain('801-000-0000');
    expect(contactItems[1].nativeElement.textContent).toContain('archangelwebsolutions@gmail.com');
  });

  it('should have SwipeUnderline components with correct props', () => {
    const underlines = fixture.debugElement.queryAll(By.directive(SwipeUnderlineComponent));
    expect(underlines.length).toBe(3);
    
    // Check first SwipeUnderline props
    const firstUnderline = underlines[0].componentInstance;
    expect(firstUnderline.width).toBe(100);
    expect(firstUnderline.fillColor).toBe('white');
    
    // Check second SwipeUnderline props
    const secondUnderline = underlines[1].componentInstance;
    expect(secondUnderline.width).toBe(250);
    expect(secondUnderline.fillColor).toBe('white');
    
    // Check third SwipeUnderline props
    const thirdUnderline = underlines[2].componentInstance;
    expect(thirdUnderline.width).toBe(130);
    expect(thirdUnderline.fillColor).toBe('white');
  });

  it('should have copyright text', () => {
    const copyright = fixture.debugElement.query(By.css('#copyright-text'));
    expect(copyright.nativeElement.textContent).toContain('2024 Root Design Shop. All rights reserved.');
  });
});
