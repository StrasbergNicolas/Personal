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
export class LoginComponent {
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
    const mail = this.usuarioForm.get('mail')?.value
    const password = this.usuarioForm.get('password')?.value
    this._usuarioService.getUsuario(mail, password).subscribe({
      next:data =>{
        console.log("usuario encontrado", data)
      }, error: err => {
        console.log(err)
      }
    })
  }

}
