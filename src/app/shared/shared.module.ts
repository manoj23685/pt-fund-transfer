import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { CardComponent } from './card/card.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [InputTextComponent, CardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [InputTextComponent, CardComponent]
})
export class SharedModule { }
