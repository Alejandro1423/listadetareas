import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://restcountries.com/v3.1'; // URL base del API

  constructor(private http: HttpClient) {}

  // Obtener todos los países
  getAllCountries(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  // Obtener un país por nombre
  getCountryByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/name/${name}`);
  }
}
