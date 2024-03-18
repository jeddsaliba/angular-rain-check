import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateComponent } from './template.component';
import { SharedModule } from '@shared/shared.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ReduxModule } from '@shared/redux/redux.module';
import { RouterTestingModule } from '@angular/router/testing';
import { LoaderModule } from '@components/loader/loader.module';

describe('TemplateComponent', () => {
  let component: TemplateComponent;
  let fixture: ComponentFixture<TemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateComponent, ToolbarComponent],
      imports: [
        SharedModule,
        ReduxModule,
        RouterTestingModule,
        LoaderModule
      ]
    });
    fixture = TestBed.createComponent(TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
