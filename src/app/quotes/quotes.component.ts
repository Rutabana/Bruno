import { Component, OnInit } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote = this.quotes.quotes[0];

  constructor(
    private quotes: Quotes,
  ) { }

  ngOnInit(): void {
    this.randomizeQuote();
  }

  public randomizeQuote(): void {
    this.quote = this.quotes.randomizeQuote();
  }

}
