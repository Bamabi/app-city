import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityListComponent } from './components/city-list/city-list.component';

const routes: Routes = [
  { path: 'list', component: CityListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
