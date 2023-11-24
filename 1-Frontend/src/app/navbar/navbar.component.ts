import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../services/producto.service'
import { AuthService } from '../core/servicio.autenticacion';

@Component({
  selector: 'app-encabezado',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {
  navForm: FormGroup
  constructor(private fb: FormBuilder,
              private router: Router,
              private actRouter: ActivatedRoute,
              private _productoService: ProductoService) {
  
  this.navForm = this.fb.group({
    search: ['', Validators.required]
  })
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
    }

}