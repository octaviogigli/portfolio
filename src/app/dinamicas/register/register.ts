import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private formBuilder = inject(FormBuilder)
  registerform = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    contrasena: ['', [Validators.required, Validators.minLength(6)]],
    email: ['pedro@yahoo.com', [Validators.required, Validators.email]],
    verificarContrasena: ['', [Validators.required, Validators.minLength(6)]]
  })
  get Nombre() {
    return this.registerform.get("nombre")
  }
  get Email() {
    return this.registerform.get("email");
  }
  get Contrasena() {
    return this.registerform.get("contrasena")
  }
  get VerificarContrasena() {
    return this.registerform.get("verificarcontrasena")
  }
  registrarUsuario() {
    if (this.registerform.valid) {
      alert("Formulario Valido")
      this.registerform.value;
    }
    else {
      alert("Formulario No Valido")
    }
  }
}
