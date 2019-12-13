import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { CityDetailComponent } from './components/city-detail/city-detail.component';
import { DialogDeleteComponent } from './components/dialog-delete/dialog.delete.component';
import { CityService } from './services/city.service';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityDetailComponent,
    DialogDeleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  providers: [
    CityService,
  ],
  entryComponents: [DialogDeleteComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
