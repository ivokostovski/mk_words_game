import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HighscoresComponent } from './highscores/highscores.component';
import { GameInputComponent } from './game/game-input/game-input.component';
import { GameGottenLettersComponent } from './game/game-gotten-letters/game-gotten-letters.component';
import { GameWordsListComponent } from './game/game-words-list/game-words-list.component';

import { DictionaryService } from './services/dictionary.service';
import { UnicodeConverterService } from './services/unicodeConverter.service';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login/login.component';
import { SignupComponent } from './auth/signup/signup/signup.component';
import { AuthInterceptor } from './auth/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HeaderComponent,
    FooterComponent,
    HighscoresComponent,
    GameInputComponent,
    GameGottenLettersComponent,
    GameWordsListComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DictionaryService, UnicodeConverterService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
