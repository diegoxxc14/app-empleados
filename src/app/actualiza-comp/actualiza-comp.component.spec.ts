import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaCompComponent } from './actualiza-comp.component';

describe('ActualizaCompComponent', () => {
  let component: ActualizaCompComponent;
  let fixture: ComponentFixture<ActualizaCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
