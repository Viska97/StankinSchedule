import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDailyComponent } from './schedule-daily.component';

describe('ScheduleDailyComponent', () => {
  let component: ScheduleDailyComponent;
  let fixture: ComponentFixture<ScheduleDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
