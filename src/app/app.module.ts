import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeSonComponent } from './employee-son/employee-son.component';
import { EmployeeFeaturesComponent } from './employee-features/employee-features.component';
import { ServicioEmpleadoService } from './servicio-empleado.service';
import { EmpleadosService } from './empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSonComponent,
    EmployeeFeaturesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServicioEmpleadoService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
