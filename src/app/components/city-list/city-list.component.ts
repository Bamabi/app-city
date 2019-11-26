import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { City } from '../../models/city';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  displayedColumns = ["seqNo", "description", "duration", "action"];
  dataSource = new MatTableDataSource<City>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.loadCities();
  }

  loadCities() {
    return this.cityService.getCities().subscribe((data: City[]) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    })
  }

  delete(city: City) {
    this.cityService.deleteCity(city.title);
  }
}
