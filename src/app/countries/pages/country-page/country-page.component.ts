import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/countries.service.ts.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public countries: Country[] = [];

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService) {

  }
  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(({ id }) => {
        this.countryService.searchCountryByAlphaCode(id)
          .subscribe(country => {
            console.log(country)
          })
      })
  }

}
