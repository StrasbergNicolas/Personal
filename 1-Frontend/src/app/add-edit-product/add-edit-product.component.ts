import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent {
  productoForm: FormGroup

  constructor(private fb: FormBuilder,
              private router: Router,
              private _productoService: ProductoService){
  
    this.productoForm = this.fb.group({
      name:['', Validators.required],
      description:['', Validators.required],
      price:['', Validators.required],
      stock:['',Validators.required]  
    })              
 }

 agregarProducto(){
  const PRODUCTO: Producto = {
    name: this.productoForm.get('name')?.value,
    description: this.productoForm.get('description')?.value,
    price: this.productoForm.get('price')?.value,
    stock: this.productoForm.get('stock')?.value
  }

  console.log(PRODUCTO)
  this._productoService.postProducto(PRODUCTO).subscribe({
    next:data => {
      console.log("producto registrado")
      this.router.navigate(['/'])
    }, error: err => {
      console.log(err)
      this.productoForm.reset()
    }
  })

 }

}
