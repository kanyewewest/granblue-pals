import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPalComponent } from './card-pal/card-pal.component';
import { CardProfileComponent } from './card-profile/card-profile.component';
import { EmojiPipe } from './pipes/emoji.pipe';
import { EmojiBarComponent } from './emoji-bar/emoji-bar.component';
@NgModule({
  declarations: [
    CardPalComponent,
    CardProfileComponent,
    EmojiPipe,
    EmojiBarComponent,
  ],
  imports: [CommonModule],
  exports: [CardPalComponent, CardProfileComponent, EmojiPipe],
})
export class SharedModule {}
