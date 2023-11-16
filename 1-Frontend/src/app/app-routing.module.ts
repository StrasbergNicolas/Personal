import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { LoginComponent } from './login/login.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { authGuard } from './guards/auth.guard';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: 'lista',  canActivate:[authGuard],  component: ListProductComponent },
  { path: 'añadir', component: AddEditProductComponent  },
  { path: 'login', component: LoginComponent },
  { path: "registrar", component: RegistroComponent},
  { path: "**", component: ListProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
