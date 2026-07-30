import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggoutComponent } from './loggout';

describe('Loggout', () => {
  let component: LoggoutComponent;
  let fixture: ComponentFixture<LoggoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoggoutComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
