import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    this.titulo = new FormControl('', [
        Validators.required,
        Validators.minLength(3)
    ]);
    this.descripcion = new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]);
    this.habilidadesUsadas = new FormControl('', [
  Validators.required,
  Validators.minLength(2)
]);

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

  if (this.proyectoForm.invalid) {
    this.proyectoForm.markAllAsTouched();
    return;
  }

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
    };