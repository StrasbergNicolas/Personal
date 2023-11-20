// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Reemplaza con la URL de tu servidor de autenticación

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    // Realizar la solicitud de inicio de sesión y obtener el token
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  saveToken(token: string): void {
    // Almacenar el token en el almacenamiento local
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    // Obtener el token desde el almacenamiento local
    return localStorage.getItem('token');
  }

  logout(): void {
    // Eliminar el token al cerrar sesión
    localStorage.removeItem('token');
  }
}
