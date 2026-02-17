import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideNav } from './side-nav'; // Ensure filename matches
import { PanelMenuModule } from 'primeng/panelmenu';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

describe('SideNav', () => {
  let component: SideNav;
  let fixture: ComponentFixture<SideNav>;

  // Mock matchMedia for PrimeNG (crucial for PanelMenu)
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: any) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => {},
      }),
    });
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // 2. Import Standalone Component & PrimeNG Module
      imports: [SideNav, PanelMenuModule],
      providers: [
        // 3. Enable Async Animations
        provideAnimationsAsync(),
        // 4. Mock the Router so 'routerLink' properties don't crash the test
        provideRouter([]) 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SideNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with 2 menu items', () => {
    expect(component.items.length).toBe(2);
  });

  it('should have correct configuration for "Home" item', () => {
    const homeItem = component.items[0];
    
    expect(homeItem.label).toBe('Home');
    expect(homeItem.icon).toBe('pi pi-home');
    expect(homeItem.routerLink).toBe('/header');
  });

  it('should have correct configuration for "MFE" item', () => {
    const mfeItem = component.items[1];
    
    expect(mfeItem.label).toBe('MFE');
    expect(mfeItem.icon).toBe('pi pi-globe');
    expect(mfeItem.routerLink).toBe('/mfe');
  });
});