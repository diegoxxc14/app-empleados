import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  empleados: Empleado[] = [
    new Empleado('Diego', 'Cuenca', 'Analista Desarrollador', 680),
    new Empleado('Silvana', 'Jiménez', 'Banca Personas', 800),
    new Empleado('Juan', 'Hidalgo', 'Jefe Desarrollo', 1500),
    new Empleado('Carlos', 'Cuenca', 'Jefe Riesgos', 1500)
  ];

  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);
    this.clearForm();
  }

  clearForm() {
    this.cuadroNombre = '';
    this.cuadroApellido = '';
    this.cuadroCargo= '';
    this.cuadroSalario = 0;
  }

}
