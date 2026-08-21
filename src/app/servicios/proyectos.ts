import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {

  private urlApi: string = "http://localhost:3000/Projects";

  constructor(private http: HttpClient) {

  }

  obteneProjectos(): Observable<any> {

    return this.http.get(this.urlApi);

  }

  crearProyecto(proyecto: any) {

    return this.http.post(this.urlApi, proyecto);

  }

}

 