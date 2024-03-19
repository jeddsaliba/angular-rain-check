import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Url } from '@enum/url';
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
import { Store } from '@ngrx/store';
import { AuthUserModel } from '@shared/redux/auth/auth.model';
import { selectLoggedInUser } from '@shared/redux/auth/auth.selector';
import { getAutocomplete, getAutocompleteCancel, setLocation } from '@shared/redux/location/location.action';
import { Location, LocationModel } from '@shared/redux/location/location.model';
import { selectLocation } from '@shared/redux/location/location.selector';
import { setSelectOptionsCancel } from '@shared/redux/shared/shared.action';
import { SelectOptionModel } from '@shared/redux/shared/shared.model';
import { selectSelectOptions } from '@shared/redux/shared/shared.selector';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup | any;
  user$: Observable<AuthUserModel> = of();
  geocoderAutocomplete!: GeocoderAutocomplete;
  options$: Observable<SelectOptionModel[]> = of([]);
  constructor(
    protected formBuilder: FormBuilder,
    private store: Store<Location>,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.getLoggedInUser();
    this.initForm();
  }
  getLoggedInUser() {
    this.user$ = this.store.select(selectLoggedInUser);
  }
  initForm(): void {
    this.searchForm = this.formBuilder.group({
      location: [
        '',
        Validators.compose([
          Validators.required
        ]),
      ],
      lon: new FormControl({
        value: '',
        disabled: true
      }),
      lat: new FormControl({
        value: '',
        disabled: true
      }),
      country: new FormControl({
        value: '',
        disabled: true
      })
    }, { validator: this.requiredValidator });
  }
  onHandleSubmit(): void {
    const {
      lon,
      lat,
      location
    } = this.searchForm.getRawValue();
    this.router.navigate([`${Url.weather}/${Url.forecast}`], {
      queryParams: {
          q: location,
          lon,
          lat
      }
    });
  }
  onKeyUp(): void {
    this.store.dispatch(getAutocompleteCancel());
    this.store.dispatch(setSelectOptionsCancel());
    this.store.dispatch(getAutocomplete(this.searchForm.value));
    this.options$ = this.store.select(selectSelectOptions);
  }
  onOptionSelected(value: any): void {
    this.store.dispatch(setLocation(value));
    this.store.select(selectLocation).subscribe((location: LocationModel) => {
      this.searchForm.controls.lon.setValue(location.lon);
      this.searchForm.controls.lat.setValue(location.lat);
      this.searchForm.controls.country.setValue(location.country);
    })
  }
  requiredValidator(control: AbstractControl): {[key: string]: boolean} | null {
    const country = control.get('country')?.value;
    const lon = control.get('lon')?.value;
    const lat = control.get('lat')?.value;
    if (!country && !lon && !lat) {
      return { 'valid': false }
    }
    return null;
  }
}
