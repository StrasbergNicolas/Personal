import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../services/producto.service'
import { AuthService } from '../core/servicio.autenticacion';

@Component({
  selector: 'app-encabezado',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

 
//

export class NavbarComponent implements OnInit{

  mostrarboton: boolean = true;
  mostrarbotones: boolean = true;

  navForm: FormGroup
  constructor(private fb: FormBuilder,
              private router: Router,
              private actRouter: ActivatedRoute,
              private _productoService: ProductoService) {
  
  this.navForm = this.fb.group({
    search: ['', Validators.required]
  })
}

ngOnInit(): void {
  if (localStorage.getItem('usuario') === null) {
    this.mostrarboton = false; //si está vacio lo oculta
  } else {
    this.mostrarboton = true;
  }

  if (localStorage.getItem('usuario') === null) {
    this.mostrarbotones = true; //si está vacio lo muestra
  } else {
    this.mostrarbotones = false;
  }


}

search(): void {
  const id = this.navForm.get('search')?.value
      this._productoService.getProducto(id).subscribe(
        (res) => {
          console.log(id)
          this.router.navigate(['/lista']);
        },
        (error) => {
          console.error('Error en la busqueda', error);
        }
      );
    }

    logout(): void {
      localStorage.removeItem('usuario')
      this.mostrarboton = !this.mostrarboton
      this.router.navigate(['/lista']);
      location. reload()

    }

    botoneras(){
      if (localStorage.getItem('usuario') != null) {
        this.mostrarbotones = true; //si está vacio lo oculta
      } else {
        this.mostrarbotones = false;
      }
    }


}