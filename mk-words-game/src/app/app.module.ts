import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {MatNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { HeaderComponent } from './header/header.component';
import { HighscoresComponent } from './highscores/highscores.component';
import { GameInputComponent } from './game/game-input/game-input.component';
import { GameGottenLettersComponent } from './game/game-gotten-letters/game-gotten-letters.component';
import { GameWordsListComponent } from './game/game-words-list/game-words-list.component';

import { DictionaryService } from './services/dictionary.service';
import { UnicodeConverterService } from './services/unicodeConverter.service';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthInterceptor } from './auth/auth-interceptor';

import { OrderModule } from 'ngx-order-pipe';
import { UserService } from './services/user.service';
import { PointsService } from './services/points.service';

import { AngularMaterialModule } from './angular-material.module';
import { ErrorComponent } from './error/error.component';
import { ErrorService } from './services/error.service';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HeaderComponent,
    HighscoresComponent,
    GameInputComponent,
    GameGottenLettersComponent,
    GameWordsListComponent,
    LoginComponent,
    SignupComponent,
    ErrorComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    OrderModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    MatNativeDateModule
  ],
  entryComponents: [HighscoresComponent],
  // tslint:disable-next-line:max-line-length
  providers: [DictionaryService, UnicodeConverterService, UserService, PointsService, ErrorService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
