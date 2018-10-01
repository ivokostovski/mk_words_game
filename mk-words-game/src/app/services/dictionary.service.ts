import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MkDictionary } from '../models/dictionary.model';

@Injectable()
export class DictionaryService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<MkDictionary>(
      'https://raw.githubusercontent.com/ivokostovski/mk_words_game/master/mk-words-game/src/db/db_mkdwords.json'
    );
  }
}
