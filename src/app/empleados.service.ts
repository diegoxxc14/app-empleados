import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadoService } from "./servicio-empleado.service";

@Injectable()
export class EmpleadosService {

  constructor(private ventanaService: ServicioEmpleadoService) {}

  private empleados: Empleado[] = [
    new Empleado('Diego', 'Cuenca', 'Analista Desarrollador', 680),
    new Empleado('Silvana', 'Jiménez', 'Banca Personas', 800),
    new Empleado('Juan', 'Hidalgo', 'Jefe Desarrollo', 1500),
    new Empleado('Carlos', 'Cuenca', 'Jefe Riesgos', 1500)
  ];

  getAllEmployees() {
    return this.empleados;
  }

  addEmployee(employee: Empleado) {
    this.ventanaService.showMessage('> NUEVO EMPLEADO\n' + employee.toString());
    this.empleados.push(employee);
  }
}