import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeSonComponent } from './employee-son/employee-son.component';
import { EmployeeFeaturesComponent } from './employee-features/employee-features.component';
import { ServicioEmpleadoService } from './servicio-empleado.service';
import { EmpleadosService } from './empleados.service';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { ProyectosCompComponent } from './proyectos-comp/proyectos-comp.component';
import { ContactoCompComponent } from './contacto-comp/contacto-comp.component';
import { QuienesCompComponent } from './quienes-comp/quienes-comp.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaCompComponent } from './actualiza-comp/actualiza-comp.component';

const appRoutes: Routes = [
  {path: '', component: HomeCompComponent},
  {path: 'proyectos', component: ProyectosCompComponent},
  {path: 'quienes', component: QuienesCompComponent},
  {path: 'contacto', component: ContactoCompComponent},
  {path: 'actualiza/:id', component: ActualizaCompComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSonComponent,
    EmployeeFeaturesComponent,
    HomeCompComponent,
    ProyectosCompComponent,
    ContactoCompComponent,
    QuienesCompComponent,
    ActualizaCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadoService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
