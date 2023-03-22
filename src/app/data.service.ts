import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataService {

  observer: Observer<any> = {
    next: response => console.log('Response received: ', response),
    error: error => console.log('Error: ', error),
    complete: () => console.log('Completed')
  };

  static readonly firebaseURL = 'https://clientes-angular-435e2-default-rtdb.firebaseio.com/datos.json';

  constructor(private httpClient: HttpClient) {}

  getAllEmployees() {
    return this.httpClient.get(DataService.firebaseURL);
  }

  saveEmployees(employees: Empleado[]) {
    this.httpClient.put(DataService.firebaseURL, employees)
      .subscribe(this.observer);
  }
}
