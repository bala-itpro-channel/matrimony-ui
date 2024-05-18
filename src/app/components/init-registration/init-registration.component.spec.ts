import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitRegistrationComponent } from './init-registration.component';

describe('InitRegistrationComponent', () => {
  let component: InitRegistrationComponent;
  let fixture: ComponentFixture<InitRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
