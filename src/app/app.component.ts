import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadosService } from './empleados.service';
import { ServicioEmpleadoService } from './servicio-empleado.service';

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

  empleados: Empleado[];

  constructor(private myService: ServicioEmpleadoService, private empService: EmpleadosService) { //Inyeccción del servicios
    this.obtenerEmpleados();
  }

  obtenerEmpleados() {
    this.empleados = this.empService.getAllEmployees();
  }

  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.myService.showMessage('Nombres completos: ' + miEmpleado.nombre.concat(' ').concat(miEmpleado.apellido));
    this.empService.addEmployee(miEmpleado);
    this.clearForm();
  }

  clearForm() {
    this.cuadroNombre = '';
    this.cuadroApellido = '';
    this.cuadroCargo= '';
    this.cuadroSalario = 0;
  }

}
