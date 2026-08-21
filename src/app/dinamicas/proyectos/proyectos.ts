import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProyectosService } from '../../servicios/proyectos';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class Proyectos {

  proyectosList: any;

  proyectoForm: FormGroup;
  titulo: FormControl;
  descripcion: FormControl;
  habilidadesUsadas: FormControl;

  constructor(
    private proyectosService: ProyectosService,
    private cdr: ChangeDetectorRef
  ) {
    this.titulo = new FormControl('');
    this.descripcion = new FormControl('');
    this.habilidadesUsadas = new FormControl('');

    this.proyectoForm = new FormGroup({
      titulo: this.titulo,
      descripcion: this.descripcion,
      habilidadesUsadas: this.habilidadesUsadas
    });
    this.proyectosService.obteneProjectos().subscribe({
      next: (data) => {
        console.log(data);
        this.proyectosList = data;
      },
      error: (error) => console.error(error),
      complete: () => this.cdr.detectChanges()
    });

  }

  handleSubmit(): void {

    console.log(this.proyectoForm.value);

    this.proyectosService.crearProyecto(this.proyectoForm.value).subscribe({

      next: (data) => {
        console.log('Proyecto creado:', data);

        this.proyectosService.obteneProjectos().subscribe({
          next: (data) => {
            this.proyectosList = data;
            this.cdr.detectChanges();
          }
        });
        this.proyectoForm.reset();
      },

      error: (error) => {
        console.error('Error al crear el proyecto:', error);
      }

    });

  }

}