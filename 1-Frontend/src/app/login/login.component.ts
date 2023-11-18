import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioServiceService } from '../services/usuario.service.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  listUsuarios: Usuario[] = [];
  usuarioForm: FormGroup

  constructor(private _usuarioService: UsuarioServiceService,
              private fb: FormBuilder,
              private router: Router,
              private actRouter: ActivatedRoute) {
  
  this.usuarioForm = this.fb.group({
    mail:['', Validators.required],
    password:['',Validators.required],
    rol:['',Validators.required]
  })
}
  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this._usuarioService.getUsuarios().subscribe({
      next: data => {
        console.log(data);
        this.listUsuarios = data
      }, error: err => {
        console.log(err)
      }
    })
  }

  logIn(){
    const USUARIO: Usuario = {
      mail: this.usuarioForm.get('mail')?.value,
      password: this.usuarioForm.get('password')?.value,
      rol: this.usuarioForm.get('rol')?.value
    }
    this._usuarioService.getUsuario(USUARIO).subscribe({
      next:data =>{
        console.log("usuario encontrado", data)
      }, error: err => {
        console.log(err)
      }
    })
  }

}
