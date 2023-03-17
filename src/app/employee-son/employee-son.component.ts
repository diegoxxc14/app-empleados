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

  constructor() { }

  ngOnInit(): void {
  }

}
