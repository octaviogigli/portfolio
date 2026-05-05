import { Routes } from '@angular/router';
import { Sobremi } from './sobremi/sobremi';
import { Proyectos } from './proyectos/proyectos';
import { Contacto } from './contacto/contacto';
import { Inicio } from './inicio/inicio';

export const routes: Routes = [
    {path: "sobremi", component:Sobremi},
    {path: "proyectos", component:Proyectos},
    {path: "contacto", component:Contacto},
    {path: "", component:Inicio},
    {path: "inicio", component:Inicio},

];


