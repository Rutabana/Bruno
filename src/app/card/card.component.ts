import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  name = '';
  age = 0;
  gender = '';
  image = '';
  bio = '';
  contactInfo = [''];

  constructor(private cardService: CardService) { }
  minutes = 30;
  seconds = 60;
  interval: any;
  play = false;

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.play = true;
    this.interval = setInterval(() => {
      if(this.seconds > 0) {
        this.seconds--;
      } else {
        this.seconds = 60;
        if (this.minutes > 0 ) {
          this.minutes--;
        } else {
          this.minutes = 30;
        }
      }
    },1000)
  }

  pauseTimer() {
    if (this.play) {
      this.play = false;
      clearInterval(this.interval);
    } else {
      this.startTimer();
    }
  }

}
