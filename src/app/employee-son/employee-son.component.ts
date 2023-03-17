import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-employee-son',
  templateUrl: './employee-son.component.html',
  styleUrls: ['./employee-son.component.css']
})
export class EmployeeSonComponent implements OnInit {

  @Input() empLista: Empleado;
  @Input() indLista: number;
  caracteristicas = [''];

  constructor() { }

  ngOnInit(): void {
  }

  agregarFeature(feature: string) {
    this.caracteristicas.push(feature);
  }

  eliminarFeatures() {
    this.caracteristicas.pop();
  }

}
