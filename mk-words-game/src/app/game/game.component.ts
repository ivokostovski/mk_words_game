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
  public validLetters;
  public dictionary;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser("5bc37d1d8778a237d0700708").subscribe(user => {
      console.log(user);
    })
    
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

  gameGottenLetters(event: Object) {
    this.validLetters = event;
  }

}
