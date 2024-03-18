import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    AutocompleteComponent
  ],
  exports: [
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AutocompleteModule { }
