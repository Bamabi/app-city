import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { CityDetailComponent } from './components/city-detail/city-detail.component';
import { TESTING_IMPORTS } from '../../testing-provider';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CityListComponent,
        CityDetailComponent
      ],
      imports: [RouterTestingModule, SharedModule],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
