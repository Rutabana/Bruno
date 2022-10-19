import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardService } from './card.service';
import { CardComponent } from './card.component';



@NgModule({
  declarations: [CardComponent],
  providers: [CardService],
  imports: [
    CommonModule
  ],
  exports: [CardComponent],
})
export class CardModule { }
