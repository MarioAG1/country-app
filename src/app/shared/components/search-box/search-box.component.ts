import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from "rxjs"

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {


  private dbouncer: Subject<string> = new Subject<string>()
  private debouncerSupcription?: Subscription;
  // Creamos esta para separlo del resto y al ser subscription tiene mas senido que el tipo subject


  @Input()
  public placeholder: string = ""

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();


  ngOnInit(): void {
    this.debouncerSupcription = this.dbouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {
        this.onDebounce.emit(value)
      })
  }
  ngOnDestroy(): void {
    this.debouncerSupcription?.unsubscribe()
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }
  onKeyPress(searchTerm: string): void {
    this.dbouncer.next(searchTerm)
  }
}
