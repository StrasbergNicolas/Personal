import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  url = "http://localhost:3000/api/usuarios/"
  constructor(private http: HttpClient) { }

  getUsuarios() : Observable<any> {
    return this.http.get(this.url)
  }
}
