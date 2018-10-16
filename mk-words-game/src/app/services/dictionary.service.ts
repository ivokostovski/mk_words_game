import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MkDictionary } from '../models/dictionary.model';

@Injectable()
export class DictionaryService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<MkDictionary>('http://localhost:4200/assets/data.json');
  }
}
