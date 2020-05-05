import { Component } from '@angular/core';
import { IEmojiBar } from '../../core/models/emoji-bar';

@Component({
  selector: 'app-emoji-bar',
  templateUrl: './emoji-bar.component.html',
  styleUrls: ['./emoji-bar.component.scss'],
})
export class EmojiBarComponent {
  //Variables for count animation on change
  hasIncrease: boolean[] = Array<boolean>(5);
  hasReduce: boolean[] = Array<boolean>(5);

  //Index of the emoji from this user the... user
  //has already voted previously for.
  emojiVotedIndex?: number;
  emojis: IEmojiBar[] = [
    {
      code: '1F633',
      count: 0,
    },
    {
      code: '1F4A9',
      count: 0,
    },
    {
      code: '1F621',
      count: 0,
    },
    {
      code: '1F602',
      count: 0,
    },
    {
      code: '1F447',
      count: 0,
    },
  ];

  constructor() {}

  clickSlip(index: number) {
    // if is logged
    this.increaseCount(index);
  }

  increaseCount(index: number) {
    // increase count
    this.hasIncrease[index] = false;
    if (this.emojiVotedIndex) {
      this.hasReduce[this.emojiVotedIndex] = false;
      this.hasReduce[this.emojiVotedIndex] = true;
      --this.emojis[this.emojiVotedIndex].count;
    }
    this.emojiVotedIndex = index;
    this.hasIncrease[index] = true;
    ++this.emojis[index].count;
    // reduce count of previous slip if exists
    // call post request
  }
}
