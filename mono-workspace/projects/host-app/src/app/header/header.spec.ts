import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';
import { MenubarModule } from 'primeng/menubar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  //Mock window.matchMedia BEFORE the test bed initializes
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
      imports: [
        Header, 
        MenubarModule
      ],
      providers: [
        provideAnimationsAsync() 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});