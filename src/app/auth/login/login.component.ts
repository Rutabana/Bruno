import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginForm } from 'src/app/types/Auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('first') first!: ElementRef;
  @ViewChild('second') second!: ElementRef;
  @ViewChild('third') third!: ElementRef;
  @ViewChild('fourth') fourth!: ElementRef;
  
  loginControl = new FormControl('');

  email: string  = "";

  form: LoginForm = {
    email: '',
    password: ''
  }

  mes = [
    "/assets/img/Me/Eyes_Stars.png",
    "/assets/img/Me/Hands_Heart.png",
    "/assets/img/Me/Waving.png",
  ]

  me = this.mes[Math.floor(Math.random() * this.mes.length)];

  constructor() { }

  ngAfterViewInit() {
    this.moveAround();
    // Get it moving
    setTimeout(() => {
      this.moveAround();
    }, 100)
    // Keep it moving
    setInterval(() => {
      this.moveAround();
    }, 5000);
  }

  private moveAround(): void {
    this.first.nativeElement.style.transform  = `translate(${Math.floor(Math.random() * 90)}vw,${Math.floor(Math.random() * 90)}vh)`;
    this.second.nativeElement.style.transform = `translate(${Math.floor(Math.random() * 90)}vw,${Math.floor(Math.random() * 90)}vh)`;
    this.third.nativeElement.style.transform  = `translate(${Math.floor(Math.random() * 90)}vw,${Math.floor(Math.random() * 90)}vh)`
    this.fourth.nativeElement.style.transform = `translate(${Math.floor(Math.random() * 90)}vw,${Math.floor(Math.random() * 90)}vh)`
  }

  login() {
    
  }

}
