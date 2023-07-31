import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {


  public searchByCapital(term: string) {
    console.log("Desde by capital")
    console.log(term)

  }
}
