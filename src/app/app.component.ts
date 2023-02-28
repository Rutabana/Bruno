import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase.config';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {
        initializeApp(firebaseConfig)
    }
    
}