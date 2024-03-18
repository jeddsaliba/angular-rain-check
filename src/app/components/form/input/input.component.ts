import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() formGroup: FormGroup | AbstractControl | any;
  @Input() type = 'text';
  @Input() controlName: FormControlName | any;
  @Input() fieldName: string | any;
  @Input() placeholder: string | any;
  @Input() hint: string | any;
  @Input() isSearch = false;
  @Output() eventOnKeyUp: EventEmitter<any> = new EventEmitter();
  onKeyUp(e: any): void {
    this.eventOnKeyUp.emit(e.target.value);
  }
}
