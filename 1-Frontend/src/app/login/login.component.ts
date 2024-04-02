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
    password:['',Validators.required],
    rol:['',Validators.required]})
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

  
  
  saveToken(token: string): void {
    // Almacenar el token en el almacenamiento local
    localStorage.setItem('token', token);
  }

  
  logIn(): void {
    const email = this.usuarioForm.get('mail')?.value;
    const password = this.usuarioForm.get('password')?.value;

    // Llama al servicio de usuario para realizar la autenticación
    this._usuarioService.getUsuario({ mail: email, password: password }).subscribe(
      (usuario) => {
        // Si la autenticación es exitosa, el usuario existe en la base de datos

        // Aquí deberías generar el token de sesión en el backend
        // Luego, recibirás el token como respuesta del backend
        
        const token = 'TOKEN_GENERADO_EN_EL_BACKEND'; // Aquí deberías asignar el token recibido del backend

        // Guarda el token en el localStorage
        localStorage.setItem('token', token);

        // Redirige a la página de lista después de un inicio de sesión exitoso
        this.router.navigate(['/lista']);

        // Aquí podrías realizar acciones adicionales después de un inicio de sesión exitoso
      },
      (error) => {
        // Manejo de errores, si es necesario
        console.error('Error en el inicio de sesión', error);
        alert("Usuario incorrecto");
      }
    );
  }



/* ORIGINAL


  logIn(): void {
    const usuarios: Usuario = {
      mail: this.usuarioForm.get('mail')?.value,
      password: this.usuarioForm.get('password')?.value,
    }
    
          // Llama al servicio de usuario para realizar la autenticación
          this._usuarioService.getUsuario(usuarios).subscribe(
            (res) => {
              // Guarda los datos en el localStorage después de un inicio de sesión exitoso
              localStorage.setItem('usuario', JSON.stringify(usuarios ));
              this.router.navigate(['/lista']);
              // Aquí podrías realizar acciones adicionales después de un inicio de sesión exitoso
            },
            (error) => {
              // Manejo de errores, si es necesario
              console.error('Error en el inicio de sesión', error);
              alert("Usuario incorrecto")
            }
          );
          setTimeout(() => {
            location.reload();
          }, 300);
*/
        }

      


