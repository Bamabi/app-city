import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TESTING_IMPORTS } from '../../../../testing-provider';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CityDetailComponent } from './city-detail.component';

describe('CityDetailComponent', () => {
  let component: CityDetailComponent;
  let fixture: ComponentFixture<CityDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDetailComponent ],
      imports: TESTING_IMPORTS,
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
