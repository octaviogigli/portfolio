import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  mostrarToast = false;
  private timer: any;

  constructor(private cdr: ChangeDetectorRef) {}

  async copiar() {
    await navigator.clipboard.writeText('octagigli@gmail.com');

    clearTimeout(this.timer);
    this.mostrarToast = true;
    this.cdr.detectChanges();
    this.timer = setTimeout(() => {
      this.mostrarToast = false;
      this.cdr.detectChanges();
    }, 3000);
  }
}
