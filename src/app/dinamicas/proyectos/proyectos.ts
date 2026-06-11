import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosService } from '../../servicios/proyectos';


@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class Proyectos {

 // proyectos: any = []
  proyectosList: any
  constructor(private proyectosService: ProyectosService, private cdr: ChangeDetectorRef) 
  {
    this.proyectosService.obteneProjectos().subscribe({
      next: (data) => { 
      console.log(data)
      this.proyectosList = data},
      error: (error) => console.error(error),
      complete: () => this.cdr.detectChanges()
    })
  }
} 