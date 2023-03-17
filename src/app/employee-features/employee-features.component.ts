import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-features',
  templateUrl: './employee-features.component.html',
  styleUrls: ['./employee-features.component.css']
})
export class EmployeeFeaturesComponent implements OnInit {

  @Output() featuresEmpleados = new EventEmitter<string>();
  @Output() clearfeatures = new EventEmitter();
  feature: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarFeatures(value: string) {
    this.featuresEmpleados.emit(value);
    this.feature='';
  }

  eliminarLastFeature() {
    this.clearfeatures.emit();
  }
}
