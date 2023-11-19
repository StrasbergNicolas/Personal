import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioServiceService } from '../services/usuario.service.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { resetFakeAsyncZone } from '@angular/core/testing';

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
    password:['',Validators.required]  })
}

  ngOnInit(): void {
    this.obtenerUsuarios()
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

  logIn(): void {
    const usuarios: Usuario = {
      mail: this.usuarioForm.get('mail')?.value,
      password: this.usuarioForm.get('password')?.value
    }
      let user = this.usuarioForm.getRawValue()
      console.log(user)
          // Llama al servicio de usuario para realizar la autenticación
      this._usuarioService.getUsuariO(usuarios).subscribe(
        
      (res) => this.router.navigate(['/lista'])
          // Aquí podrías realizar acciones adicionales después de un inicio de sesión exitoso
      );
    }
  }
