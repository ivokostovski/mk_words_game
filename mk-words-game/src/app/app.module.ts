import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HighscoresComponent } from './highscores/highscores.component';
import { GameInputComponent } from './game/game-input/game-input.component';
import { GameGottenLettersComponent } from './game/game-gotten-letters/game-gotten-letters.component';
import { HttpClientModule } from '@angular/common/http';
import { DictionaryService } from './services/dictionary.service';
import { UnicodeConverterService } from './services/unicodeConverter.service';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HeaderComponent,
    FooterComponent,
    HighscoresComponent,
    GameInputComponent,
    GameGottenLettersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DictionaryService, UnicodeConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
