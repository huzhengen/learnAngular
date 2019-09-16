import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDashboardComponent } from './hero-dashboard.component';

describe('HeroDashboardComponent', () => {
  let component: HeroDashboardComponent;
  let fixture: ComponentFixture<HeroDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
