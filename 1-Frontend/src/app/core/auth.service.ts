import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/usuario';
import { UsuarioServiceService } from '../services/usuario.service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
 
  listUsuarios: Usuario[] = [];

  constructor(private _usuarioService: UsuarioServiceService) { }

  //acá tendria que llegar la data que se puso en el login y validarla en la base de datos,
  //si el usuario que intenta ingresar tiene cualquier rol, podrá ver el componente de agregar editar
  //sino no podrá hacerlo.
  //actualmente lo que setá haciendo el programa es ver todos los usuarios sin buscar uno en específico
  getAuthToken(): Observable<boolean>{
    this._usuarioService.getUsuarios().subscribe({
      next: data => {
        console.log(data);
        this.listUsuarios = data
      }, error: err => {
        console.log(err)
      }
    })

    return of(true)
  }

}
