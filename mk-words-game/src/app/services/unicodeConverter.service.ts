import { Injectable } from '@angular/core';

@Injectable()
export class UnicodeConverterService {

  constructor() {}

  convertWordToUnicode(word: string) {
    const convertedWord = [];
    const newWordArray = [];
    let newWord = '';
    convertedWord.push(word.split(''));
    for (let i = 0; i < convertedWord.length; i++) {
      const convertedLetter = this.convertLettersToUnicode(convertedWord[i]);
      newWordArray.push(convertedLetter);
    }
    newWord = newWordArray.join();
    newWord = newWord.replace(/,/g, '');
    return newWord;
  }
  convertWordToCyrillic(word: string) {
    const convertedWord = [];
    const newWordArray = [];
    let newWord = '';
    convertedWord.push(word.split(''));
    for (let i = 0; i < convertedWord.length; i++) {
      const convertedLetter = this.convertUnicodeТоLetters(convertedWord[i]);
      newWordArray.push(convertedLetter);
    }
    newWord = newWordArray.join();
    newWord = newWord.replace(/,/g, '');
    return newWord;
  }

  convertLettersToUnicode(letter: string) {
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
  convertUnicodeТоLetters(letter: string) {
    switch (letter) {
      case '\u0430':
        letter = 'а';
        break;
      case '\u0431':
        letter = 'б';
        break;
      case '\u0432':
        letter = 'в';
        break;
      case '\u0433':
        letter = 'г';
        break;
      case '\u0434':
        letter = 'д';
        break;
      case '\u0453':
        letter = 'ѓ';
        break;
      case '\u0435':
        letter = 'е';
        break;
      case '\u0436':
        letter = 'ж';
        break;
      case '\u0437':
        letter = 'з';
        break;
      case '\u0455':
        letter = 'ѕ';
        break;
      case '\u0438':
        letter = 'и';
        break;
      case '\u0458':
        letter = 'ј';
        break;
      case '\u043A':
        letter = 'к';
        break;
      case '\u043B':
        letter = 'л';
        break;
      case '\u0459':
        letter = 'љ';
        break;
      case '\u043C':
        letter = 'м';
        break;
      case '\u043D':
        letter = 'н';
        break;
      case '\u045A':
        letter = 'њ';
        break;
      case '\u043E':
        letter = 'о';
        break;
      case '\u043F':
        letter = 'п';
        break;
      case '\u0440':
        letter = 'р';
        break;
      case '\u0441':
        letter = 'с';
        break;
      case '\u0442':
        letter = 'т';
        break;
      case '\u045C':
        letter = 'ќ';
        break;
      case '\u0443':
        letter = 'у';
        break;
      case '\u0444':
        letter = 'ф';
        break;
      case '\u0445':
        letter = 'х';
        break;
      case '\u0446':
        letter = 'ц';
        break;
      case '\u0447':
        letter = 'ч';
        break;
      case '\u045F':
        letter = 'џ';
        break;
      case '\u0448':
        letter = 'ш';
        break;

      default:
        break;
    }
    return letter;
  }
}
