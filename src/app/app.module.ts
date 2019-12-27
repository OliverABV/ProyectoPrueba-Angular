import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './content/login/login.component';
import { InicioComponent } from './content/inicio/inicio.component';
import { HeaderComponent } from './content/header/header.component';
import { MaterialModule } from './material/material.module';
import { MainComponent } from './content/main/main.component';
import { FooterComponent } from './content/footer/footer.component';
import { VentaComponent } from './content/venta/venta.component';
import { RegistroComponent } from './content/registro/registro.component';
import { CarritoComprasComponent } from './content/carrito-compras/carrito-compras.component';
import { QuienesSomosComponent } from './content/quienes-somos/quienes-somos.component';
import { HomeUserComponent } from './content/home-user/home-user.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestablecerPassComponent } from './content/restablecer-pass/restablecer-pass.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    VentaComponent,
    RegistroComponent,
    CarritoComprasComponent,
    QuienesSomosComponent,
    HomeUserComponent,
    RestablecerPassComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:  [],
  bootstrap: [AppComponent]
})
export class AppModule { }
