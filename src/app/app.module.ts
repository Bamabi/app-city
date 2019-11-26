import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { CityDetailComponent } from './components/city-detail/city-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatIconModule, MatButtonModule } from '@angular/material';
import { CityService } from './services/city.service';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatPaginatorModule, 
    MatProgressSpinnerModule, 
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    CityService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
