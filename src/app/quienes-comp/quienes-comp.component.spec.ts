import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesCompComponent } from './quienes-comp.component';

describe('QuienesCompComponent', () => {
  let component: QuienesCompComponent;
  let fixture: ComponentFixture<QuienesCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuienesCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuienesCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
