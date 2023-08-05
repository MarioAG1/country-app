import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service.ts.service';

type Region = "Africa" | "America" | "Europe" | "Asia" | "Oceania"

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = []
  public isLoading: boolean = false
  public regions: Region[] = ["Africa", "America", "Europe", "Asia", "Oceania"]
  public selectedRegion? : Region



  constructor(private countryService: CountryService) {

  }

  public searchByRegion(region: Region) {
    this.selectedRegion = region
    this.isLoading = true
    this.countryService.searchRegion(region)
      .subscribe(countries => {
        this.countries = countries
        this.isLoading = false

      })
  }
}
