import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFeaturesComponent } from './employee-features.component';

describe('EmployeeFeaturesComponent', () => {
  let component: EmployeeFeaturesComponent;
  let fixture: ComponentFixture<EmployeeFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
