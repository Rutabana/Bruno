import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getName(): string {
    return '';
  }

  getAge(): number {
    return 0; 
  }
  
  getGender(): string {
    return '';
  }

  getImage(): string {
    return '';
  }

  getBio(): string {
    return '';
  }
  
  getContactInfo(): string[] {
    return [];
  }
}
