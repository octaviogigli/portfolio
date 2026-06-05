import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosService } from '../../servicios/proyectos';
//import { ProyectosService } from '../../servicios/proyectos';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class Proyectos {
  proyectos = []

  constructor(private proyectosService: ProyectosService) 
  {
    this.proyectosService.obteneProjectos().subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error(error),
      complete: () => console.info('complete')
    })
  }
}