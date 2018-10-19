import { Component, OnInit } from '@angular/core';
import { Word } from '../models/word.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  public submitedWord: Word;
  public gameStarted = false;
  public newGame = false;
  public validLetters;
  public dictionary;

  constructor(private userService: UserService) {
  }

  ngOnInit() {    
  }

  transferDictionary(dictionary: any) {
    this.dictionary = dictionary;
  }

  gameSubmitedWordNotify(word: Word) {
    this.submitedWord = word;
  }

  gameStarting() {
    this.gameStarted = true;
  }
  
  newGameStarting() {
    this.newGame = false;
  }

  gameGottenLetters(event: Object) {
    this.validLetters = event;
  }

  gameEnded(event: Event) {
    this.gameStarted = false;
    this.newGame = true;
  }

}
