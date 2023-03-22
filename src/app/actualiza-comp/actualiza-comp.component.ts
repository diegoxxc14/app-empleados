import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualiza-comp',
  templateUrl: './actualiza-comp.component.html',
  styleUrls: ['./actualiza-comp.component.css']
})
export class ActualizaCompComponent implements OnInit {

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
  empleados: Empleado[];
  indice: number;
  empleado: Empleado;
  accion: string;

  constructor(private router: Router, private route: ActivatedRoute, private empService: EmpleadosService) {
    this.obtenerEmpleados();
    this.accion = this.route.snapshot.queryParams['accion'];  // 1 si es actualizar y 2 para eliminar
    this.indice = this.route.snapshot.params['id'];
    this.empleado = this.obtenerEmpleadoId(this.indice);
    this.fillForm(this.empleado);
  }

  ngOnInit(): void {
  }

  irHome() {
    this.router.navigate(['']);
  }

  obtenerEmpleadoId(id: number): Empleado {
    return this.empService.getEmployeeByIndex(id);
  }

  obtenerEmpleados() {
    this.empleados = this.empService.getAllEmployees();
  }

  editarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empService.updateEmployee(this.indice, miEmpleado);
    this.irHome();
  }

  eliminarEmpleado(){
    this.empService.deleteEmployee(this.indice);
    this.irHome();
  }

  ejecutarAccion() {
    if(this.accion == '1') {
      this.editarEmpleado();
    } else {
      this.eliminarEmpleado();
    }
  }

  fillForm(emp: Empleado) {
    this.cuadroNombre = emp.nombre;
    this.cuadroApellido = emp.apellido;
    this.cuadroCargo= emp.cargo;
    this.cuadroSalario = emp.salario;
  }

  clearForm() {
    this.cuadroNombre = '';
    this.cuadroApellido = '';
    this.cuadroCargo= '';
    this.cuadroSalario = 0;
  }

}
