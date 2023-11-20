import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  listProducts: Producto[] = []; 

  constructor(private _productoService:ProductoService,
    private router: Router
){} //guion bajo es privado  

ngOnInit(): void {
this.obtenerProductos(); //esto es para recargar constantemente la página y tener la data actualizada 
}

obtenerProductos(){
this._productoService.getProductos().subscribe({
next: data => {
console.log(data);
this.listProducts = data
}, error: err => {
console.log(err);
}
})
}


}
