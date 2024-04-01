import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { setDataTable } from '@shared/redux/datatable/datatable.action';
import { getWeatherForecastByGeolocation } from '@shared/redux/weather/weather.action';
import { ForecastModel, Weather } from '@shared/redux/weather/weather.model';
import { selectWeatherForecast } from '@shared/redux/weather/weather.selector';
import { WeatherForecastTableHeads } from '@shared/redux/weather/weather.state';
import { BreadcrumbService } from 'xng-breadcrumb';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastComponent implements OnInit, OnDestroy {
  selectWeatherForecast$: any;
  geolocation!: { lon: number, lat: number };
  constructor(
    private store: Store<Weather>,
    private breadcrumbService: BreadcrumbService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.getParameters();
    this.getWeatherDetails();
  }
  getParameters(): void {
    this.route.queryParams.subscribe((params: any) => {
      const { q, lon, lat } = params;
      if (q) {
        this.breadcrumbService.set('@locationName', q);
      }
      this.geolocation = {
        lon,
        lat
      };
    })
  }
  getWeatherDetails() {
    this.store.dispatch(getWeatherForecastByGeolocation(this.geolocation));
    this.selectWeatherForecast$ = this.store.select(selectWeatherForecast).subscribe((forecast: ForecastModel[]) => {
      this.store.dispatch(
        setDataTable({
          data: forecast,
          table_heads: WeatherForecastTableHeads,
        })
      );
    });
  }
  goBack() {
    this.location.back();
  }
  ngOnDestroy(): void {
    this.selectWeatherForecast$.unsubscribe();
  }
}
