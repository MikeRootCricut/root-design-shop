import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a navbar brand with correct text', () => {
    const brandElement = fixture.debugElement.query(By.css('.navbar-brand'));
    expect(brandElement).toBeTruthy();
    expect(brandElement.nativeElement.textContent).toContain('Root');
    expect(brandElement.nativeElement.textContent).toContain('Design');
    expect(brandElement.nativeElement.textContent).toContain('Shop');
  });

  it('should have navigation links', () => {
    const links = fixture.debugElement.queryAll(By.css('.nav-link'));
    expect(links.length).toBe(2);
    expect(links[0].nativeElement.textContent).toContain('Services');
    expect(links[1].nativeElement.textContent).toContain('Contact Us');
  });

  it('should have a search form with input and button', () => {
    const searchInput = fixture.debugElement.query(By.css('#header-search'));
    const searchButton = fixture.debugElement.query(By.css('#search-button'));
    
    expect(searchInput).toBeTruthy();
    expect(searchButton).toBeTruthy();
    expect(searchButton.nativeElement.textContent.trim()).toBe('Search');
  });

  it('should have correct router links', () => {
    const links = fixture.debugElement.queryAll(By.css('.nav-link'));
    expect(links[0].attributes['routerLink']).toBe('services');
    expect(links[1].attributes['routerLink']).toBe('contact-us');
  });

  it('should have correct styling classes', () => {
    const nav = fixture.debugElement.query(By.css('nav'));
    expect(nav.classes['navbar']).toBeTruthy();
    expect(nav.classes['fixed-top']).toBeTruthy();
    expect(nav.classes['navbar-dark']).toBeTruthy();
    expect(nav.classes['bg-dark']).toBeTruthy();
  });
});
