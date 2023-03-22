import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadoService } from "./servicio-empleado.service";

@Injectable()
export class EmpleadosService {

  constructor(private ventanaService: ServicioEmpleadoService, private dataService: DataService) {}

  private empleados: Empleado[] = [
    new Empleado('Diego', 'Cuenca', 'Analista Desarrollador', 680),
    new Empleado('Silvana', 'Jiménez', 'Banca Personas', 800),
    new Empleado('Juan', 'Hidalgo', 'Jefe Desarrollo', 1500),
    new Empleado('Carlos', 'Cuenca', 'Jefe Riesgos', 1500)
  ];

  getEmployeeByIndex(index: number): Empleado {
    return this.empleados[index];
  }

  getAllEmployees() {
    return this.empleados;
  }

  addEmployee(employee: Empleado) {
    this.ventanaService.showMessage('> NUEVO EMPLEADO\n' + employee.toString());

    this.empleados.push(employee);
    // Luego de actualizar el array lo guardamos en la BD
    this.dataService.saveEmployees(this.empleados);
  }

  updateEmployee(index: number, employee: Empleado) {
    this.empleados[index] = employee;
  }

  deleteEmployee(index: number) {
    this.empleados.splice(index, 1);  // Elimina desde el indice, 1 elemento
  }
}
