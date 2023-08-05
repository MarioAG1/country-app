import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service.ts.service';


@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false
  public initialValue: string = ""

  constructor(private countryService: CountryService) {
  }
  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries
    this.initialValue = this.countryService.cacheStore.byCapital.term
  }


  public searchByCapital(term: string) {
    this.isLoading = true
    this.countryService.searchCapital(term)
      .subscribe(countries => {
        this.countries = countries
        this.isLoading = false
      })

  }
}
