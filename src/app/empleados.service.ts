import { Empleado } from "./empleado.model";

export class EmpleadosService {

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
    this.empleados.push(employee);
  }
}
