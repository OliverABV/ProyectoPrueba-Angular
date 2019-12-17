import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './content/login/login.component';
import { MainComponent } from './content/main/main.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'main',
  component: MainComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
