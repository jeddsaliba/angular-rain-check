import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableComponent } from './datatable.component';
import { ReduxModule } from '@shared/redux/redux.module';
import { SharedModule } from '@shared/shared.module';

describe('DatatableComponent', () => {
  let component: DatatableComponent;
  let fixture: ComponentFixture<DatatableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatatableComponent],
      imports: [
        SharedModule,
        ReduxModule
      ]
    });
    fixture = TestBed.createComponent(DatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
