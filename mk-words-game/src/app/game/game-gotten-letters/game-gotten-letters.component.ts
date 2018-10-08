import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { UnicodeConverterService } from 'src/app/services/unicodeConverter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-gotten-letters',
  templateUrl: './game-gotten-letters.component.html',
  styleUrls: ['./game-gotten-letters.component.css']
})
export class GameGottenLettersComponent implements OnInit {

  @Output() sendGottenLetters: EventEmitter<any> = new EventEmitter<any>();
  @Input() myDictionary;

  // tslint:disable-next-line:max-line-length
  // fullListOfLetters = ['А', 'Б', 'В', 'Г', 'Д', 'Ѓ', 'Е', 'Ж', 'З', 'Ѕ', 'И', 'Ј', 'К', 'Л',	'Љ', 'М', 'Н', 'Њ',	'О',	'П',	'Р',	'С',	'Т',	'Ќ',	'У',	'Ф',	'Х',	'Ц',	'Ч',	'Џ',	'Ш'];
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

  constructor(private dicService: DictionaryService, private converter: UnicodeConverterService) {}

  ngOnInit() {
    setTimeout(() => {
      this.chooseRandomWord();
    }, 1000);
    this.sendGottenLetters.emit(this.gottenLetters);
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
      if (j % 2 === 0) {
        this.choosenRandomWord.push(splitUpWord[j]);
      } else if (j % 2 === 1) {
        this.choosenRandomWord.unshift(splitUpWord[j]);
      }
    }
    this.findNumberOfSameLetters();
  }

  randomNumber() {
    return Math.floor(Math.random() * this.choosenRandomWord.length);
  }

  findNumberOfSameLetters() {
    for (let i = 0; i < this.choosenRandomWord.length; i++) {
      this.gottenLetters[`${this.choosenRandomWord[i].toUpperCase()}`]++;
    }
  }
}
