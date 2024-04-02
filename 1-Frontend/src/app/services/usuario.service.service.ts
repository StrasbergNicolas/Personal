import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  url = "http://localhost:3000/api/usuarios/"
  urllogin = "http://localhost:3000/api/usuarios/login"

  constructor(private http: HttpClient) { }

  postUsuario(credentials: { mail: string, password: string }) : Observable<any>{
    return this.http.post(this.url, credentials)
  }

  getUsuarios() : Observable<any> {
    return this.http.get(this.url)
  }

  getUsuarioRol(credentials: { mail: string, password: string, rol:string }): Observable<any> {
    return this.http.post(this.urllogin, credentials);
  }

  getUsuario(credentials: { mail: string, password: string }): Observable<any> {
    return this.http.post(this.urllogin, credentials);
  }
}
