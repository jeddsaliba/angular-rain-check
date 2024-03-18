import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '@environments/environment';
import { ThemeModule } from '@theme/theme.module';
import { BreadcrumbModule } from 'xng-breadcrumb';

const SharedModules = [
  ThemeModule,
  BreadcrumbModule,
  RouterModule,
  ReactiveFormsModule,
  HttpClientModule
];
@NgModule({
  exports: [
    SharedModules
  ],
  imports: [
    AuthModule.forRoot({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ]
})
export class SharedModule { }
