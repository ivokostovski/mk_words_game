import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HighscoresComponent } from './highscores/highscores.component';
import { AuthGuard } from './auth/auth.guard';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: GameComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'highscores', component: HighscoresComponent, canActivate: [AuthGuard]},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule {}
