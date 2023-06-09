import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadoService } from "./servicio-empleado.service";

@Injectable()
export class EmpleadosService {

  constructor(private ventanaService: ServicioEmpleadoService, private dataService: DataService) {}

  private empleados: Empleado[] = [];

  setEmployeesBD(employees: Empleado[]) {
    this.empleados = employees;
  }

  getEmployeesBD() {
    return this.dataService.getAllEmployees();
  }

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
    this.dataService.updateEmployee(index, employee);
  }

  deleteEmployee(index: number) {
    this.empleados.splice(index, 1);  // Elimina desde el indice, 1 elemento
    this.dataService.deleteEmployee(index);

    // Se vuelve a guardar los empleados para reconstruir los índices.
    if (this.empleados != null) {
      this.dataService.saveEmployees(this.empleados);
    }

  }
}
