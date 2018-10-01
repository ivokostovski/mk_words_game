import { Component, Input } from '@angular/core';

import { Word } from '../models/word.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent {

  submitedWords: Word[] = [];
  latestWord: Word;
  wordClasses = {
    'bg-danger': true,
    'bg-success': true
  };

  constructor() {}

  oNsumbitWordClicked(newWord: Word) {
    if (newWord.isValid === true) {
      this.wordClasses["bg-success"] = true;
      this.wordClasses["bg-danger"] = false;
    } else {
      this.wordClasses["bg-success"] = false;
      this.wordClasses["bg-danger"] = true;
    };

    this.latestWord = newWord;
    this.submitedWords.push(newWord);
  }

}
