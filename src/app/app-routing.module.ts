import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { TemplateComponent } from './template/template.component';
import { authGuard } from './guard/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    canActivate: [
      authGuard
    ],
    children: [
      {
        path: '',
        redirectTo: 'weather',
        pathMatch: 'full'
      },
      {
        path: 'weather',
        loadChildren: () => import('./pages/weather/weather.module').then((m) => m.WeatherModule)
      }
    ]
  },
  { path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule)
  },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
