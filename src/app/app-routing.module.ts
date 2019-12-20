import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './content/login/login.component';
import { MainComponent } from './content/main/main.component';
import { VentaComponent } from './content/venta/venta.component';
import { QuienesSomosComponent } from './content/quienes-somos/quienes-somos.component';
import { RegistroComponent } from './content/registro/registro.component';

const routes: Routes = [
{
  path: '',
  component: MainComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'registro',
  component: RegistroComponent
},
{
  path: 'main',
  component: MainComponent
},
{
  path: 'venta',
  component: VentaComponent
},
{
  path: 'nosotros',
  component: QuienesSomosComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
