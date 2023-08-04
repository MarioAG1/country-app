import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service.ts.service';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = []
  public isLoading: boolean = false



  constructor(private countryService: CountryService) {

  }

  public searchByRegion(term: string) {
    this.isLoading = true
    this.countryService.searchRegion(term)
      .subscribe(countries => {
        this.countries = countries
        this.isLoading = false

      })
  }
}
