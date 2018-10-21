import { Component, OnInit, OnDestroy } from '@angular/core';
import { Word } from '../models/word.model';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit, OnDestroy {

  public submitedWord: Word;
  public gameStarted = false;
  public newGame = false;
  public validLetters;
  public dictionary;
  public userIsAuthenticated = false;
  private authStatusSub: Subscription;

  constructor(private userService: UserService, private authService: AuthService) {
  }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });
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

  gameEnded(event: Event) {
    this.gameStarted = false;
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
