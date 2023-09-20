import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcursosComponent } from './dashboardcursos.component';

describe('DashboardcursosComponent', () => {
  let component: DashboardcursosComponent;
  let fixture: ComponentFixture<DashboardcursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardcursosComponent]
    });
    fixture = TestBed.createComponent(DashboardcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
