import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { environment } from '@environments/environment';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: `${environment.appName} - Log In`,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
