import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-gotten-letters',
  templateUrl: './game-gotten-letters.component.html',
  styleUrls: ['./game-gotten-letters.component.css']
})
export class GameGottenLettersComponent implements OnInit {

  @Output() sendGottenLetters: EventEmitter<any> = new EventEmitter<any>();

  // tslint:disable-next-line:max-line-length
  fullListOfLetters = ['А', 'Б', 'В', 'Г', 'Д', 'Ѓ', 'Е', 'Ж', 'З', 'Ѕ', 'И', 'Ј', 'К', 'Л',	'Љ', 'М', 'Н', 'Њ',	'О',	'П',	'Р',	'С',	'Т',	'Ќ',	'У',	'Ф',	'Х',	'Ц',	'Ч',	'Џ',	'Ш'];
  maxNumberOfLetters = 60;
  choosenListOfLetters = [];
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
    this.chooseLetters(this.fullListOfLetters);
    this.findNumberOfSameLetters();
    this.sendGottenLetters.emit(this.gottenLetters);
  }

  randomNumber() {
    return Math.floor(Math.random() * 31);
  }

  chooseLetters(list: String[]) {
    for (let i = 1; i <= this.maxNumberOfLetters; i++) {
      this.choosenListOfLetters.push(list[this.randomNumber()]);
    }
  }

  findNumberOfSameLetters() {
    for (let i = 0; i < this.choosenListOfLetters.length; i++) {
      this.gottenLetters[`${this.choosenListOfLetters[i].toUpperCase()}`]++;
    }
  }
}
