import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { UnicodeConverterService } from 'src/app/services/unicodeConverter.service';

@Component({
  selector: 'app-game-gotten-letters',
  templateUrl: './game-gotten-letters.component.html',
  styleUrls: ['./game-gotten-letters.component.css']
})
export class GameGottenLettersComponent implements OnInit, OnChanges  {

  @Output() sendGottenLetters: EventEmitter<any> = new EventEmitter<any>();
  @Input() myDictionary;

  maxNumberOfLetters = 12;
  choosenRandomWord = [];
  gottenLetters = {'А': 0,
   'Б': 0,
   'В': 0,
   'Г': 0,
   'Д': 0,
   'Ѓ': 0,
   'Е': 0,
   'Ж': 0,
   'З': 0,
   'Ѕ': 0,
   'И': 0,
   'Ј': 0,
   'К': 0,
   'Л': 0,
   'Љ': 0,
   'М': 0,
   'Н': 0,
   'Њ': 0,
   'О': 0,
   'П': 0,
   'Р': 0,
   'С': 0,
   'Т': 0,
   'Ќ': 0,
   'У': 0,
   'Ф': 0,
   'Х': 0,
   'Ц': 0,
   'Ч': 0,
   'Џ': 0,
   'Ш': 0
  };

  constructor() {}

  ngOnInit() {
    this.sendGottenLetters.emit(this.gottenLetters);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['myDictionary'] && !changes['myDictionary'].firstChange) {
        this.chooseRandomWord();
    }
}

  chooseRandomWord() {
    this.choosenRandomWord = [];
    const largeWords = [];
    for (let i = 0; i < this.myDictionary.length; i++) {
      if (this.myDictionary[i].lexeme.length > 12) {
        largeWords.push(this.myDictionary[i].lexeme);
      }
    }
    const randomNumber = Math.floor(Math.random() * largeWords.length);
    const splitUpWord = largeWords[randomNumber].split('');

    for (let j = 0; j < splitUpWord.length; j++) {
      if (splitUpWord[j] !== '-') {
        if (j % 2 === 0) {
          this.choosenRandomWord.push(splitUpWord[j]);
        } else if (j % 2 === 1) {
          this.choosenRandomWord.unshift(splitUpWord[j]);
        }
      }
    }
    this.findNumberOfSameLetters();
  }

  findNumberOfSameLetters() {
    for (let i = 0; i < this.choosenRandomWord.length; i++) {
      this.gottenLetters[`${this.choosenRandomWord[i].toUpperCase()}`]++;
    }
  }
}
