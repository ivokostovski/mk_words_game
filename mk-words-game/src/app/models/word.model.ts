export class Word {
  content: string;
  isValid: boolean;
  points?: number;

  constructor(content: string, isValid: boolean, points: number) {
    this.content = content;
    this.isValid = isValid;
    this.points = points;
  }
}
