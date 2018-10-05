import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Word } from '../../models/word.model';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-input',
  templateUrl: './game-input.component.html',
  styleUrls: ['./game-input.component.css']
})

export class GameInputComponent implements OnInit {

  @Output() submitedWordNotify: EventEmitter<any> = new EventEmitter<any>();
  submitedWord: Word;
  rForm: FormGroup;
  isValid: boolean;
  timer = 5;

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'content': [null, Validators.compose([Validators.required, Validators.minLength(2)])]
    });
   }

   ngOnInit() {
    const myTimer = interval(1000);
    myTimer.subscribe(() => {
      if (this.timer > 0) {
        this.timer--;
      }
    });
   }

   addWord(content) {
    this.submitedWord = new Word((content.content).trim().toLowerCase(), this.isValid);
    this.submitedWordNotify.emit(this.submitedWord);
    this.rForm.reset();
   }

   startGame() {

   }


}
