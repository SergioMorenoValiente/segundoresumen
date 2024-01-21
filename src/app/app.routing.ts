import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EspecificacionesComponent } from "./components/especificaciones/especificaciones.component";
import { HomeComponent } from "./components/home/home.component";
import {ServiciosComponent} from "./components/servicios/servicios.component"


const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "espe", component: EspecificacionesComponent },
  { path: "servicios", component: ServiciosComponent },
  

]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);