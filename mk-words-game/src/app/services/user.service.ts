import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  private users: User[] = [];

  getUsers() {
    this.http.get<User[]>('http//localhost:3000/api/users').subscribe(userData => {
      this.users = userData;
    });
  }
}
