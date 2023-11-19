import { Component } from '@angular/core';
import { Usuario } from '../models/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioServiceService } from '../services/usuario.service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {
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

register(): void {
  const usuarios: Usuario = {
    mail: this.usuarioForm.get('mail')?.value,
    password: this.usuarioForm.get('password')?.value
  }
    let user = this.usuarioForm.getRawValue()
    console.log(user)
        // Llama al servicio de usuario para realizar la autenticación
    this._usuarioService.postUsuario(usuarios).subscribe(
      
    (res) => this.router.navigate(['/lista'])
        // Aquí podrías realizar acciones adicionales después de un inicio de sesión exitoso
    );
  }
}

