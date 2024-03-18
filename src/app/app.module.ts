import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateComponent } from './template/template.component';
import { ToolbarComponent } from './template/toolbar/toolbar.component';
import { ErrorComponent } from './pages/error/error.component';
import { ReduxModule } from '@redux/redux.module';
import { SharedModule } from '@shared/shared.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { LoaderModule } from '@components/loader/loader.module';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ToolbarComponent,
    ErrorComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReduxModule,
    LoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
