import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';

import { Word } from '../../models/word.model';
import { DictionaryService } from '../../services/dictionary.service';
import { UnicodeConverterService } from '../../services/unicodeConverter.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-game-words-list',
  templateUrl: './game-words-list.component.html',
  styleUrls: ['./game-words-list.component.css']
})
export class GameWordsListComponent implements OnInit, OnChanges {
  @Input()
  submitedWord: Word;
  @Input()
  validLetters;
  @Output()
  sendDictionary: EventEmitter<any> = new EventEmitter<any>();

  myDictionary;
  convertedWord;
  submitedWords: Word[] = [];
  latestWord: Word;
  disableFirstChange = 0;
  wordExist = false;
  currentGameTotalPoints: number;

  constructor(
    private dicService: DictionaryService,
    private converter: UnicodeConverterService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.dicService.getData().subscribe(data => {
      this.myDictionary = data.data;
      this.sendDictionary.emit(this.myDictionary);
    });
    this.currentGameTotalPoints = 0;
  }

  ngOnChanges() {
    if (this.disableFirstChange > 0) {
      this.oNsumbitWordClicked(this.submitedWord);
    }
    this.disableFirstChange++;
  }

  oNsumbitWordClicked(newWord: Word) {
    this.wordExist = this.wordAlreadyEntered(newWord, this.submitedWords);
    if (this.wordExist) {
      return;
    }

    const invalidLetters = this.checkIfValidLetters(newWord, this.validLetters);
    if (invalidLetters === 0) {
      newWord.isValid = this.checkIfWordIsValidInDictionary(newWord);
    } else if (invalidLetters > 0 || invalidLetters < 0) {
      newWord.isValid = false;
    }
    this.latestWord = newWord;
    if (this.latestWord.isValid) {
      newWord.points = this.calculatePointsForEachWord(this.latestWord.content);
      this.currentGameTotalPoints += newWord.points;
    }
    this.submitedWords.unshift(newWord);
  }

  checkIfWordIsValidInDictionary(word: Word) {
    let valid = false;
    this.convertedWord = this.converter.convertWordToUnicode(word.content);
    for (let i = 0; i < this.myDictionary.length; i++) {
      if (this.convertedWord === this.myDictionary[i].lexeme) {
        valid = true;
      }
    }
    return valid;
  }

  checkIfValidLetters(word: Word, validLet: any) {
    const letterArray = word.content.split('');
    let notValidLetters = 0;
    const tempValidLet = Object.assign({}, validLet);
    for (let i = 0; i < letterArray.length; i++) {
      // tslint:disable-next-line:max-line-length
      if (tempValidLet[`${letterArray[i].toUpperCase()}`] > 0) {
        tempValidLet[`${letterArray[i].toUpperCase()}`]--;
      } else {
        notValidLetters++;
      }
    }
    return notValidLetters;
  }

  wordAlreadyEntered(word: Word, wordArray: Word[]) {
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i].content.toUpperCase() === word.content.toUpperCase()) {
        return true;
      } else {
        return false;
      }
    }
  }

  calculatePointsForEachWord(word: string) {
    return word.split('').length;
  }
}

//
