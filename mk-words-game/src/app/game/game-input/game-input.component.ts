import { Component, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Word } from '../../models/word.model';

@Component({
  selector: 'app-game-input',
  templateUrl: './game-input.component.html',
  styleUrls: ['./game-input.component.css']
})

export class GameInputComponent {

  @Output() notify: EventEmitter<any> = new EventEmitter<any>();
  submitedWord: Word;
  rForm: FormGroup;
  isValid = true;

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'content': [null, Validators.compose([Validators.required, Validators.minLength(2)])]
    });
   }

   addWord(content) {
    this.submitedWord = new Word(content.content, this.isValid);
    this.notify.emit(this.submitedWord);
    this.rForm.reset();
   }


}
