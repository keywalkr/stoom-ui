import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// https://www.youtube.com/watch?v=PdVerlfmO6M&list=PLtlqfp1XEW4hXv8C2-gJVdLTzTVzihoH8&ab_channel=TheRyanSmee
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges();

  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'stoom-ui' title`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('stoom-ui');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, stoom-ui');
  });
});
