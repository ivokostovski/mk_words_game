import { Injectable } from '@angular/core';

@Injectable()
export class UnicodeConverterService {

  constructor() {}

  convertWord(word: string) {
    const convertedWord = [];
    const newWordArray = [];
    let newWord = '';
    convertedWord.push(word.split(''));
    for (let i = 0; i < convertedWord.length; i++) {
      const convertedLetter = this.convertLetters(convertedWord[i]);
      newWordArray.push(convertedLetter);
    }
    newWord = newWordArray.join();
    newWord = newWord.replace(/,/g, '');
    return newWord;
  }

  convertLetters(letter: string) {
    switch (letter) {
      case 'а':
        letter = '\u0430';
        break;
      case 'б':
        letter = '\u0431';
        break;
      case 'в':
        letter = '\u0432';
        break;
      case 'г':
        letter = '\u0433';
        break;
      case 'д':
        letter = '\u0434';
        break;
      case 'ѓ':
        letter = '\u0453';
        break;
      case 'е':
        letter = '\u0435';
        break;
      case 'ж':
        letter = '\u0436';
        break;
      case 'з':
        letter = '\u0437';
        break;
      case 'ѕ':
        letter = '\u0455';
        break;
      case 'и':
        letter = '\u0438';
        break;
      case 'ј':
        letter = '\u0458';
        break;
      case 'к':
        letter = '\u043A';
        break;
      case 'л':
        letter = '\u043B';
        break;
      case 'љ':
        letter = '\u0459';
        break;
      case 'м':
        letter = '\u043C';
        break;
      case 'н':
        letter = '\u043D';
        break;
      case 'њ':
        letter = '\u045A';
        break;
      case 'о':
        letter = '\u043E';
        break;
      case 'п':
        letter = '\u043F';
        break;
      case 'р':
        letter = '\u0440';
        break;
      case 'с':
        letter = '\u0441';
        break;
      case 'т':
        letter = '\u0442';
        break;
      case 'ќ':
        letter = '\u045C';
        break;
      case 'у':
        letter = '\u0443';
        break;
      case 'ф':
        letter = '\u0444';
        break;
      case 'х':
        letter = '\u0445';
        break;
      case 'ц':
        letter = '\u0446';
        break;
      case 'ч':
        letter = '\u0447';
        break;
      case 'џ':
        letter = '\u045F';
        break;
      case 'ш':
        letter = '\u0448';
        break;

      default:
        break;
    }
    return letter;
  }
}
