import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './content/login/login.component';
import { MainComponent } from './content/main/main.component';
import { VentaComponent } from './content/venta/venta.component';
import { QuienesSomosComponent } from './content/quienes-somos/quienes-somos.component';
import { RegistroComponent } from './content/registro/registro.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeUserComponent } from './content/home-user/home-user.component';
import { RestablecerPassComponent } from './content/restablecer-pass/restablecer-pass.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


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
  path: 'homeUser',
  canActivate: [AuthGuard],
  component: HomeUserComponent
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
},
{
  path: 'restablecerPass',
  component: RestablecerPassComponent
},
{
  path: '**',
  component: PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
