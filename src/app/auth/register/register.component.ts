import { Component, ViewChild, ElementRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterForm } from 'src/app/types/Auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit {
  @ViewChild('first') first!: ElementRef;
  @ViewChild('second') second!: ElementRef;
  @ViewChild('third') third!: ElementRef;
  @ViewChild('fourth') fourth!: ElementRef;
  @ViewChild('username') username!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('password') password!: ElementRef;
  @ViewChild('confirm') confirm!: ElementRef;
  @ViewChild('blank') blank!: ElementRef;

  registrationForm: FormGroup;
  
  loginControl: FormControl;

  form: RegisterForm = {
    username: '',
    email: '',
    password: '',
    confirm: ''
  }

  usernameHidden = true;
  emailHidden = true;
  passwordHidden = true;
  blankHidden1 = true;
  blankHidden2 = true;
  blankHidden3 = true;
  blankHidden4 = true;
  matchHidden = true;
  invalidForm = true;

  mes = [
    "/assets/img/Me/Eyes_Stars.png",
    "/assets/img/Me/Hands_Heart.png",
    "/assets/img/Me/Waving.png",
  ]

  me = this.mes[Math.floor(Math.random() * this.mes.length)];

  constructor(
    private fb : FormBuilder
  ) { }

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

    this.registrationForm = this.fb.group({
      username: ['',
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)  
      ],
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['',
      Validators.required ,
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{14,}$/),
      Validators.maxLength(30)
      ],
      confirm: ['',
      Validators.required,
      ]
    })
  }

  private moveAround(): void {
    this.first.nativeElement.style.transform = `translate(${Math.floor(Math.random() * 90)}vw,${Math.floor(Math.random() * 90)}vh)`;
    this.second.nativeElement.style.transform = `translate(${Math.floor(Math.random() * 90)}vw,${Math.floor(Math.random() * 90)}vh)`;
    this.third.nativeElement.style.transform = `translate(${Math.floor(Math.random() * 90)}vw,${Math.floor(Math.random() * 90)}vh)`
    this.fourth.nativeElement.style.transform = `translate(${Math.floor(Math.random() * 90)}vw,${Math.floor(Math.random() * 90)}vh)`
  }

  validateUsername(): boolean {
    const field = this.form.username;
    
    // Blank field
    if (field.trim() === "") {
      this.blankHidden1 = false;
      return false;
    } else this.blankHidden1 = true;

    // Invalid username

    // Must be atleast 3 characters long
    field.length < 3 ? this.usernameHidden = false : this.usernameHidden = true;
    return this.usernameHidden;
  }


  validateEmail(): boolean {
    const field = this.form.email;

    // Blank field
    if (field.trim() === "") {
      this.blankHidden2 = false;
      return false;
    } else this.blankHidden2 = true;

    // Invalid email
    
    // a string with at least five characters, followed by an @, followed by at least 
    // three characters, followed by a ., followed by at least two letter characters
    const email_pattern = /^\w{5,}@\w{3,}\.[a-zA-Z]{2,}$/;
    email_pattern.test(field) ? this.emailHidden = true : this.emailHidden = false;
    return this.emailHidden;
  }

  validatePassword(): boolean {
    const field = this.form.password;

    // Blank field
    if (field.trim() === "") {
      this.blankHidden3 = false;
      return false;
    } else this.blankHidden3 = true;

    // Invalid password

    // At least 14 characters, have at least one uppercase letter,
    // one lower case letter and at least one symbol

    // UPDATE REGEX
    // const password_pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const password_pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{14,}$/;

    password_pattern.test(field) ? this.passwordHidden = true: this.passwordHidden = false;
    return this.passwordHidden;
  }

  validateConfirm(): boolean {
    const field: string = this.form.confirm;
    
    // Blank field
    if (field.trim() === "") {
      this.blankHidden4 = false;
      return false;
    } else this.blankHidden4 = true;
    
    // Passwords not matching
    (field !== this.form.password) ? this.matchHidden = false : this.matchHidden = true;
    return this.matchHidden;
  }


  submit() {
    if (this.validateUsername() && this.validateEmail() && this.validatePassword() && this.validateConfirm()) {
      console.log("valid");
      this.invalidForm = true;
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    } else {
      this.invalidForm = false;
      console.log("invalid");
    }
  }
}
