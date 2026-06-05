import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HttpClient } from '@angular/common/http';

interface SobreMi {
  nombre: string;
  descripcion: string;
  email: string;
}

@Component({
  selector: 'app-sobremi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobremi.html',
  styleUrl: './sobremi.css'
})
export class Sobremi {
}