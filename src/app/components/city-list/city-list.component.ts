import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSidenav, MatDialog } from '@angular/material';
import { DialogDeleteComponent } from '../dialog-delete/dialog.delete.component';
import { City } from '../../models/city';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  // Columns to display
  displayedColumns = ["seqNo", "description", "duration", "action"];
  // Datasource for the table
  dataSource = new MatTableDataSource<City>();
  // Selected city
  selectedCity: City;
  // Index of the selected city
  selectedIndex: number;
  // Sidenav title
  sidenavTitle: string;
  // Create sidenav 
  opened: boolean = false;
  // Create/Edit mode
  isEditMode: boolean = false;
  // Create/Edit mode
  displayCards: boolean = false;
  // Edit sidenav
  @ViewChild(MatSidenav , { static: false }) sidenav: MatSidenav; 

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private cityService: CityService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.loadCities();
  }

  // GET ALL cities
  loadCities() {
    // Get all the city with HTTP
    // return this.cityService.getCities().subscribe((data: City[]) => {
    //   this.dataSource.data = data;
    //   this.dataSource.paginator = this.paginator;
    // });

    this.dataSource.data = this.cityService.getCities();
    this.dataSource.paginator = this.paginator;
  }
  
  edit(city: City, index: number) {
    // Param to pass to the sidenav component
    this.selectedCity = city;
    this.selectedIndex = index;
    
    // Set create or edit mode
    this.isEditMode = (city !== undefined);
    this.sidenav.toggle();
  }

  // DELETE
  delete(city: City, index: number) {
    // Delete the city with HTTP
    // this.cityService.deleteCity(city.title);
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '250px',
      data: {city: city}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === true) {
        this.cityService.deleteCity(index)
        this.loadCities();
      }
    });

  }

  // CREATE/PUT
  save(city: City) {
    if (this.isEditMode) {
      // Update the city with HTTP
      // this.cityService.updateCity(city.title, city);
      this.cityService.updateCity(city, this.selectedIndex);

    } else {
      // Create the city with HTTP
      // this.cityService.createCity(city);
      this.cityService.createCity(city);

    }
    this.loadCities();
  }
}
