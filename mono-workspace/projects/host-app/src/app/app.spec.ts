import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 1. Import this

// Mock Components
@Component({
  selector: 'app-header',
  standalone: true, 
  template: ''
})
class MockHeader {}

@Component({
  selector: 'app-side-nav',
  standalone: true,
  template: ''
})
class MockSideNav {}

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        App // App is NOT standalone, so it lives here
      ],
      imports: [
        MockHeader,
        MockSideNav,
        // 2. Add RouterModule here. 
        // We use .forRoot([]) to provide both the directives (router-outlet) 
        // and the empty router configuration services in one go.
        RouterModule.forRoot([]) 
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    // Check for one of your known elements to verify rendering worked
    // (Since <router-outlet> itself doesn't render text, checking for Header is good)
    expect(compiled.querySelector('app-header')).toBeTruthy();
  });
});