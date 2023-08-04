import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/countries.service.ts.service';
import { switchMap, delay } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;
  public isLoading: boolean = false


  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
    private router: Router) {

  }
  ngOnInit(): void {
    this.isLoading = true
    this.activatedRoute.params

      .pipe(
        switchMap(({ id }) => this.countryService.searchCountryByAlphaCode(id)),
        delay(2000)
      )
      .subscribe(country => {
        if (!country) return this.router.navigateByUrl("")
        this.isLoading = false
        return this.country = country

      })
  }
}
