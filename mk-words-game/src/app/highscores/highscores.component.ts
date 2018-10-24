import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthData } from '../models/auth-data.model';
import { OrderPipe } from 'ngx-order-pipe';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.css']
})
export class HighscoresComponent implements OnInit {

  users: AuthData[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers();
    this.userService.getUserUpdateListener().subscribe(users => {
      this.users = users;
    });
  }

  sortData(sort: Sort) {
    const data = this.users.slice();
    if (!sort.active || sort.direction === '') {
      this.users = data;
      return;
    }

    this.users = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'points': return compare(a.points, b.points, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}