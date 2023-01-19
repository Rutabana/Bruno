import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardService } from './card.service';
import { CardComponent } from './card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CardComponent],
  providers: [CardService],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [CardComponent],
})
export class CardModule { }
