import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  url = "http://localhost:3000/api/usuarios/"
  constructor(private http: HttpClient) { }

  
  getUsuarios() : Observable<any> {
    return this.http.get(this.url)
  }
  
  getUsuario(password:string, mail: string) : Observable<any>{
    return this.http.get(this.url + mail + password)
  }

}
