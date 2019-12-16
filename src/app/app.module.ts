import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './content/login/login.component';
import { InicioComponent } from './content/inicio/inicio.component';
import { HeaderComponent } from './content/header/header.component';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './content/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
