import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControlName, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { SelectOptionModel } from '@shared/redux/shared/shared.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteComponent {
  @Input() formGroup: FormGroup | AbstractControl | any;
  @Input() required = false;
  @Input() controlName: FormControlName | any;
  @Input() fieldName: string | any;
  @Input() placeholder: string | any;
  @Input() hint: string | any;
  @Input() isSearch = false;
  @Input() options$: Observable<SelectOptionModel[]> = of([]);
  @Input() loading$: Observable<boolean> = of(false);
  @Output() eventOnKeyUp: EventEmitter<any> = new EventEmitter();
  @Output() eventOnOptionSelected: EventEmitter<any> = new EventEmitter();
  onKeyUp(): void {
    this.eventOnKeyUp.emit();
  }
  onOptionSelected(e: MatAutocompleteSelectedEvent): void {
    this.eventOnOptionSelected.emit(e.option.value.value);
    this.formGroup.get(this.controlName).setValue(e.option.value.label);
  }
}
