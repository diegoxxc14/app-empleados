import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observer } from "rxjs";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataService {

  observer: Observer<any> = {
    next: response => console.log('Response received: ', response),
    error: error => console.log('Error: ', error),
    complete: () => console.log('Completed')
  };

  constructor(private httpClient: HttpClient) {}

  saveEmployees(employees: Empleado[]) {
    this.httpClient.put('https://clientes-angular-435e2-default-rtdb.firebaseio.com/datos.json', employees)
      .subscribe(this.observer);
  }
}
