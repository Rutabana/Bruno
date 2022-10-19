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

  ngOnInit(): void {
    this.name = this.cardService.getName();
    this.age = this.cardService.getAge();
    this.gender = this.cardService.getGender();
    this.image = this.cardService.getImage();
    this.bio = this.cardService.getBio();
    this.contactInfo = this.cardService.getContactInfo();
  }

}
