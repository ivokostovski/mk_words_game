import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-gotten-letters',
  templateUrl: './game-gotten-letters.component.html',
  styleUrls: ['./game-gotten-letters.component.css']
})
export class GameGottenLettersComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  fullListOfLetters = ['А', 'Б', 'В', 'Г', 'Д', 'Ѓ', 'Е', 'Ж', 'З', 'Ѕ', 'И', 'Ј', 'К', 'Л',	'Љ', 'М', 'Н', 'Њ',	'О',	'П',	'Р',	'С',	'Т',	'Ќ',	'У',	'Ф',	'Х',	'Ц',	'Ч',	'Џ',	'Ш'];
  maxNumberOfLetters = 9;
  choosenListOfLetters = [];

  constructor() { }

  ngOnInit() {
    this.chooseLetters(this.fullListOfLetters);
  }

  randomNumber() {
    return Math.round(Math.random() * 31);
  }

  chooseLetters(list: String[]) {
    for (let i = 1; i <= this.maxNumberOfLetters; i++) {
      this.choosenListOfLetters.push(list[this.randomNumber()]);
    }
  }

}
