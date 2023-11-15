import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})

export class ListProductComponent implements OnInit {

  listProducts: Producto[] = []; 

  constructor(private _productoService:ProductoService){} //guion bajo es privado  
  
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
