import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { InicioComponent } from './inicio/inicio.component'
import { AuthService } from './core/servicio.autenticacion';
import { EdicionComponent } from './edicion/edicion.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    AddEditProductComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    NoEncontradoComponent,
    RegistrarseComponent,
    InicioComponent,
    EdicionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
