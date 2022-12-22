import { Component, OnInit } from '@angular/core';
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
  seconds = 0;
  s_minutes = "0".concat(new Number(this.minutes).toString()).slice(-2);
  s_seconds = "0".concat(new Number(this.seconds).toString()).slice(-2);
  interval: any;
  play = false;
  user_minutes = 0;
  user_seconds = 0;

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer(minutes = this.minutes, seconds = this.seconds) {
    if (minutes > 59) {
      minutes = this.minutes = 60;
    }
    if (seconds > 59) {
      seconds = this.seconds = 60;
    }
    this.user_minutes = minutes;
    this.user_seconds = seconds;
    this.play = true;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if(this.seconds > 0) {
        this.seconds--;
      } else {
        this.seconds = 59;
        if (this.minutes > 0 ) {
          this.minutes--;
        } else {
          //Time ended so we're resetting
          this.resetTimer();
          this.clearInterval();
        }
      }
      // Timer will now display zeroes when necessary (i.e. 09:04 isntead of 9:4)
      this.s_minutes = "0".concat(new Number(this.minutes).toString()).slice(-2);
      this.s_seconds = "0".concat(new Number(this.seconds).toString()).slice(-2);
    },1000)
  }

  pauseTimer() {
    if (this.play == true) {
      this.play = false;
      clearInterval(this.interval);
    } else {
      this.startTimer(this.minutes, this.seconds);
    }
  }

  resetTimer() {
    clearInterval(this.interval);
    this.minutes = this.user_minutes;
    this.seconds = this.user_seconds;
    this.startTimer(this.minutes, this.seconds);
  }

  changeTimer() {
    this.minutes = parseInt((<HTMLInputElement>document.getElementById("minutes-field")).value);
    this.seconds = parseInt((<HTMLInputElement>document.getElementById("seconds-field")).value);
    this.startTimer(this.minutes, this.seconds);
  }

  clearInterval() {
    if (this.play == true) {
      this.pauseTimer();
      this.play = false;
    }
    clearInterval(this.interval);
  }

}
