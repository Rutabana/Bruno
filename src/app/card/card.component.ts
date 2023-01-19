import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';
import { Quotes } from '../quotes/quotes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private cardService: CardService,
    private quotes: Quotes
  ) { }

  minutes = 30;
  seconds = 0;
  s_minutes = ("0" + this.minutes).slice(-2);
  s_seconds = ("0" + this.seconds).slice(-2);
  interval: any;
  play = false;
  user_minutes = 0;
  user_seconds = 0;

  quote = this.quotes.quotes[0];

  ngOnInit(): void {
    this.startTimer();
    this.registerDragElement();
    this.randomizeQuote();
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
    this.seconds = this.user_seconds + 1;
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

  public randomizeQuote(): void {
    this.quote = this.quotes.randomizeQuote();
  }

  // Make Card Draggable
  private registerDragElement() {
    const elemnt = <HTMLDivElement>document.getElementById('card');
    
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    const dragMouseDown = (e: MouseEvent) => {

      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;

      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    };
  
    const elementDrag = (e: MouseEvent) => {
      e = e || window.event;
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elemnt.style.top = elemnt.offsetTop - pos2 + 'px';
      elemnt.style.left = elemnt.offsetLeft - pos1 + 'px';
    };
  
    const closeDragElement = () => {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    };
  
    elemnt.onmousedown = dragMouseDown;
  }
  
  public allowDrop(ev: DragEvent): void {
    ev.preventDefault();
  }
  
  public drag(ev: DragEvent): void {
    ev?.dataTransfer?.setData("text", (<HTMLDivElement>ev?.target).id);
  }
  
  public drop(ev: DragEvent, elementId: string): void {
    ev.preventDefault();
    var data = ev?.dataTransfer?.getData("text") || elementId;
    (<HTMLDivElement>ev.target).appendChild(<HTMLDivElement>document.getElementById(data));
  }
}
