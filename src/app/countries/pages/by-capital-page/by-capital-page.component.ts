import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service.ts.service';


@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public  countries: Country[] = [];

  constructor ( private countryService: CountryService) {

  }


  public searchByCapital(term: string) {
    this.countryService.searchCapital(term)
    .subscribe(countries => {
      this.countries = countries
    })

  }
}
