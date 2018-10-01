export class Word {
  content: string;
  isValid: boolean;

  constructor(content: string, isValid: boolean) {
    this.content = content;
    this.isValid = isValid;
  }
}
