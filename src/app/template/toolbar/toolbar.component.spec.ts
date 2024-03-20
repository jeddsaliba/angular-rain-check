import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { SharedModule } from '@shared/shared.module';
import { ReduxModule } from '@shared/redux/redux.module';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { AuthUserModel } from '@shared/redux/auth/auth.model';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      imports: [
        SharedModule,
        ReduxModule
      ]
    });
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have an appName ${environment.appName}`, () => {
    expect(component.appName).toEqual(environment.appName);
  });
  it(`user$ should be an instance of 'Observable<AuthUserModel>'`, () => {
    expect(component.user$).toBeInstanceOf(Observable<AuthUserModel>);
  })
});
