import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-employee-features',
  templateUrl: './employee-features.component.html',
  styleUrls: ['./employee-features.component.css']
})
export class EmployeeFeaturesComponent implements OnInit {

  @Output() featuresEmpleados = new EventEmitter<string>();
  @Output() clearfeatures = new EventEmitter();
  feature: string = '';

  constructor(private myServicio: ServicioEmpleadoService) { }

  ngOnInit(): void {
  }

  agregarFeatures(value: string) {
    this.myServicio.showMessage("Característica nueva: " + value);
    this.featuresEmpleados.emit(value);
    this.feature='';
  }

  eliminarLastFeature() {
    this.clearfeatures.emit();
  }
}
