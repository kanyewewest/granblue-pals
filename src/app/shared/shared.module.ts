import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPalComponent } from './card-pal/card-pal.component';
import { CardProfileComponent } from './card-profile/card-profile.component';
import { EmojiPipe } from './pipes/emoji.pipe';
import { EmojiBarComponent } from './emoji-bar/emoji-bar.component';
import { CardPalNewComponent } from './card-pal-new/card-pal-new.component';
@NgModule({
  declarations: [
    CardPalComponent,
    CardProfileComponent,
    EmojiPipe,
    EmojiBarComponent,
    CardPalNewComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardPalComponent,
    CardPalNewComponent,
    CardProfileComponent,
    EmojiPipe,
  ],
})
export class SharedModule {}
