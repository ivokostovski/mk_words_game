import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

import { Word } from '../../models/word.model';
import { DictionaryService } from '../../services/dictionary.service';
import { UnicodeConverterService } from '../../services/unicodeConverter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-words-list',
  templateUrl: './game-words-list.component.html',
  styleUrls: ['./game-words-list.component.css']
})
export class GameWordsListComponent implements OnInit, OnChanges {

  @Input() submitedWord: Word;
  @Input() validLetters;

  myDictionary;
  convertedWord;
  submitedWords: Word[] = [];
  latestWord: Word;
  disableFirstChange = 0;

  constructor(private dicService: DictionaryService, private converter: UnicodeConverterService) {
  }

  ngOnInit() {
    this.dicService.getData().subscribe(data => {
      this.myDictionary = data.data;
    });
  }

  ngOnChanges() {
    if (this.disableFirstChange > 0) {
      this.oNsumbitWordClicked(this.submitedWord);
    }
    this.disableFirstChange++;
  }

  oNsumbitWordClicked(newWord: Word) {
    const invalidLetters = this.checkIfValidLetters(newWord, this.validLetters);
    if (invalidLetters === 0) {
      newWord.isValid = this.checkIfWordIsValidInDictionary(newWord);
    } else if (invalidLetters > 0 || invalidLetters < 0) {
      newWord.isValid = false;
    }
    this.latestWord = newWord;
    this.submitedWords.push(newWord);
  }

  checkIfWordIsValidInDictionary(word: Word) {
    let valid = false;
    this.convertedWord = this.converter.convertWord(word.content);
    for (let i = 0; i < this.myDictionary.length; i++) {
      if (this.convertedWord === this.myDictionary[i].lexeme) {
        valid = true;
      }
    }
    return valid;
  }

  checkIfValidLetters(word: Word, validLetters: Object) {
    const letterArray = word.content.split('');
    let notValidLetters = 0;
    for (let i = 0; i < letterArray.length; i++) {
      // tslint:disable-next-line:max-line-length
      if (validLetters[`${letterArray[i].toUpperCase()}`] > 0) {
        validLetters[`${letterArray[i].toUpperCase()}`]--;
      } else {
        notValidLetters++;
      }
    }
    return notValidLetters;
  }

}

//
