import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { City } from '../models/city';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  // Base url
  baseurl = 'http://localhost:3000';

  constructor(/*private http: HttpClient*/) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getCities(): City[] {
    if (localStorage.getItem('cities')) {
      return JSON.parse(localStorage.getItem('cities'));
    } else {
      let cities = require('../../../backend/database.json');
      localStorage.setItem('cities',JSON.stringify(cities.city));
      return cities.city;
    }
  }

  createCity(city: City) {
    let cities = JSON.parse(localStorage.getItem('cities'));
    cities.push(city);
    localStorage.setItem('cities',JSON.stringify(cities));
  }

  updateCity(city: City, index: number) {
    let cities = JSON.parse(localStorage.getItem('cities'));
    cities.splice(index, 1, city);
    localStorage.setItem('cities',JSON.stringify(cities));
  }

  deleteCity(index: number) {
    let cities = JSON.parse(localStorage.getItem('cities'));
    cities.splice(index, 1);
    localStorage.setItem('cities',JSON.stringify(cities));
  }

  //****************************************************************************/
  // Partie développée en utilisant server-json pour simuler des services http.
  //****************************************************************************/

  // // POST
  // createCity(data): Observable<City> {
  //   return this.http.post<City>(this.baseurl + '/city/', JSON.stringify(data), this.httpOptions)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }  

  // // GET
  // getCity(title): Observable<City> {
  //   return this.http.get<City>(this.baseurl + '/city/' + title)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }

  // // GET
  // getCities(): Observable<City[]> {
  //   return this.http.get<City[]>(this.baseurl + '/city/')
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }

  // // PUT
  // updateCity(title, data): Observable<City> {
  //   return this.http.put<City>(this.baseurl + '/city/' + title, JSON.stringify(data), this.httpOptions)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }

  // // DELETE
  // deleteCity(title){
  //   return this.http.delete<City>(this.baseurl + '/city/' + title, this.httpOptions)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }

  // // Error handling
  // handleError(error) {
  //   let errorMessage = '';
  //   if(error.error instanceof ErrorEvent) {
  //     // Get client-stitlee error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Get server-stitlee error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(errorMessage);
  // }
}
