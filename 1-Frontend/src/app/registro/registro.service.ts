// nombre-del-servicio.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NombreDelServicioService {
  private apiUrl = 'http://localhost:3000/api'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) {}

  autenticarUsuario(email: string, password: string): Observable<any> {
    const datos = { email, password };

    return this.http.post<any>(`${this.apiUrl}/ruta-de-autenticacion`, datos);
  }
}