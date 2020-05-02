import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPalComponent } from './card-pal/card-pal.component';
import { CardProfileComponent } from './card-profile/card-profile.component';
@NgModule({
  declarations: [CardPalComponent, CardProfileComponent],
  imports: [CommonModule],
  exports: [CardPalComponent, CardProfileComponent],
})
export class SharedModule {}
