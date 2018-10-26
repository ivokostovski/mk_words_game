import { Component, EventEmitter, Output, OnInit, Input, OnChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Word } from '../../models/word.model';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-input',
  templateUrl: './game-input.component.html'
})

export class GameInputComponent implements OnInit, OnChanges {

  @Output() submitedWordNotify: EventEmitter<any> = new EventEmitter<any>();
  @Output() gameEndedNotify: EventEmitter<any> = new EventEmitter<any>();
  @Input() clickedLetter;
  clickedLetters: string;
  gameEnded = true;
  submitedWord: Word;
  rForm: FormGroup;
  isValid: boolean;
  timer = 100;

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'content': [null, Validators.compose([Validators.required, Validators.minLength(2)])]
    });
   }

  ngOnInit() {
    this.counter();
    this.clickedLetters = '';
  }

  ngOnChanges(changes: any) {
    this.addClickedLetter();
  }

  addClickedLetter() {
    this.clickedLetters += this.clickedLetter;
  }

  addWord(content) {
  this.submitedWord = new Word((content.content).trim().toLowerCase(), this.isValid, 0);
  this.submitedWordNotify.emit(this.submitedWord);
  this.rForm.reset();
  }

  private counter() {
  setTimeout(() => {
    const myTimer = interval(1000);
    myTimer.subscribe(() => {
    if (this.timer > 0) {
      this.timer--;
    } else if (this.timer <= 0) {
      this.gameEndedNotify.emit(this.gameEnded);
    }
  });
    }, 500);
  }
}
