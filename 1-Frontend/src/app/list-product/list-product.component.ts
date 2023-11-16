import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})



export class ListProductComponent implements OnInit {

  listProducts: Producto[] = []; 

  constructor(private _productoService:ProductoService,
              private router: Router
    ){} //guion bajo es privado  
  
  ngOnInit(): void {
    this.obtenerProductos(); //esto es para recargar constantemente la página y tener la data actualizada 
  }


  iraeditar(){
    this.router.navigate(['/añadir'])
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
  
  eliminarProducto(_id:any){ 
    this._productoService.deleteProducto(_id).subscribe({ 
    next: data => { 
      this.obtenerProductos(); 
    }, error: err => { console.log(err); 
    } 
  }) 
}
}
