import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './src/app/shared/shared.module';

/**
 * Define the common testing imports module.
 */
export const TESTING_IMPORTS = [
  RouterTestingModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  SharedModule.forRoot(),
  BrowserAnimationsModule,
];

