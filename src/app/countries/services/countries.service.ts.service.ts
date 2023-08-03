import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountryService {

  private apiUrl: string = "https://restcountries.com/v3.1"

  constructor(private http: HttpClient) { }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`


    return this.http.get<Country[]>(url)
      // Atrapar el error
      .pipe(
        catchError(() => of([]))
      )
  }
  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`

    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      )

  }
  searchRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`

    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      )
  }
  searchCountryByAlphaCode(code: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${code}`
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      )

  }
}
