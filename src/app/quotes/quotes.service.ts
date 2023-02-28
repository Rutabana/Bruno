import { Injectable } from '@angular/core';
import { QuotesComponent } from './quotes.component';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(
    private quotesComponent: QuotesComponent,
  ) { }
}
