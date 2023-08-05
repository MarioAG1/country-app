import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service.ts.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = []
  public isLoading: boolean = false
  public regions: Region[] = ["Africa", "America", "Europe", "Asia", "Oceania"]
  public selectedRegion? : Region
  public initialValue: Region = ""



  constructor(private countryService: CountryService) {

  }

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries
    this.initialValue = this.countryService.cacheStore.byRegion.region
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
