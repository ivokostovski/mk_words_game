import { Component } from '@angular/core';
import { Word } from '../models/word.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent {

  public submitedWord: Word;
  public gameStarted = false;

  constructor() {
  }

  childEventClicked(word: Word) {
    this.submitedWord = word;
  }

  gameStarting() {
    this.gameStarted = true;
  }

}
