import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  });

  it('should create the app', () => {
    expect(!!fixture.title).toBe(true);
  });

});
