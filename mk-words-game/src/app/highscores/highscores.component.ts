import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthData } from '../models/auth-data.model';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.css']
})
export class HighscoresComponent implements OnInit {

  users: AuthData[] = [];
  order: string = 'user.points';
  reverse: boolean = false;

  constructor(private userService: UserService, private orderPipe: OrderPipe) {
  }

  ngOnInit() {
    this.userService.getUsers();
    this.userService.getUserUpdateListener().subscribe(users => {
      this.users = users;
      this.users = this.orderPipe.transform(this.users, 'user.points');
    })
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}
