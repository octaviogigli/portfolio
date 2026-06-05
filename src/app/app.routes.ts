import { Routes } from '@angular/router';
import { Sobremi } from './dinamicas/sobremi/sobremi';
import { Proyectos } from './dinamicas/proyectos/proyectos';
import { Contacto } from './dinamicas/contacto/contacto';
import { Inicio } from './dinamicas/inicio/inicio';

export const routes: Routes = [
    {path: "sobremi", component:Sobremi},
    {path: "proyectos", component:Proyectos},
    {path: "contacto", component:Contacto},
    {path: "", component:Inicio},

];


