import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastComponent } from './forecast.component';
import { SharedModule } from '@shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ReduxModule } from '@shared/redux/redux.module';
import { DatatableModule } from '@components/datatable/datatable.module';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastComponent],
      imports: [
        SharedModule,
        ReduxModule,
        RouterTestingModule,
        DatatableModule
      ]
    });
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
