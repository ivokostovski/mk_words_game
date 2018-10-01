import { Component, OnInit } from '@angular/core';

import { Word } from '../models/word.model';
import { DictionaryService } from '../services/dictionary.service';
import { UnicodeConverterService } from '../services/unicodeConverter.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  myDictionary;
  convertedWord;
  submitedWords: Word[] = [];
  latestWord: Word;
  wordClasses = {
    'bg-danger': true,
    'bg-success': true
  };

  constructor(private dicService: DictionaryService, private converter: UnicodeConverterService) {
  }

  ngOnInit() {
    this.dicService.getData().subscribe(data => {
      this.myDictionary = data.data;
    });
  }

  oNsumbitWordClicked(newWord: Word) {
    newWord.isValid = this.checkIfWordIsValid(newWord);

    if (newWord.isValid === true) {
      this.wordClasses['bg-success'] = true;
      this.wordClasses['bg-danger'] = false;
    } else {
      this.wordClasses['bg-success'] = false;
      this.wordClasses['bg-danger'] = true;
    }

    this.latestWord = newWord;
    this.submitedWords.push(newWord);
  }

  checkIfWordIsValid(word: Word) {
    let valid = false;
    this.convertedWord = this.converter.convertWord(word.content);
    for (let i = 0; i < this.myDictionary.length; i++) {
      if (this.convertedWord === this.myDictionary[i].lexeme) {
        valid = true;
      }
    }
    return valid;
  }

}
