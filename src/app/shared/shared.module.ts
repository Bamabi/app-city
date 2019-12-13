import { NgModule, ModuleWithProviders, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatButtonModule, MatTabsModule, MatSidenavModule,
  MatSelectModule, MatSlideToggleModule, MatToolbarModule, MatIconModule, MatCardModule, MatDialogModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
  ],
  entryComponents: [
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
      ]
    };
  };
}
