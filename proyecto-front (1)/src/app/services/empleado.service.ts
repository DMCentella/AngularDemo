import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../model/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private url: string = "http://localhost:8081/api/empleados";

  constructor(private http: HttpClient) { }

  listarEmpleados(){
    return this.http.get<Empleado[]>(this.url);
  }

}
