import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { AuthData } from "../models/auth-data.model";

@Injectable({ providedIn: "root" })
export class UserService {

  private users: AuthData[] = [];
  private usersUpdated = new Subject<AuthData[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getUsers() {
    this.http
      .get<{ message: string; users: any }>("http://localhost:3000/api/user")
      .pipe(
        map(userData => {
          return userData.users.map(user => {
            return {
              name: user.name,
              email: user.email,
              id: user._id,
              points: user.points
            };
          });
        })
      )
      .subscribe(transformedUsers => {
        this.users = transformedUsers;
        this.usersUpdated.next([...this.users]);
      });
  }

  getUserUpdateListener() {
    return this.usersUpdated.asObservable();
  }

  getUser(id: string) {
    return this.http.get<{ _id: string; name: string; email: string; points: number }>(
      "http://localhost:3000/api/user/" + id
    );
  }

  updateUser(id: string, name: string, email: string, points: number) {
    const user: AuthData = { id: id, name: name, email: email, points: points };
    this.http
      .patch("http://localhost:3000/api/user/" + id, user)
      .subscribe(response => {
        const updatedUsers = [...this.users];
        const oldPostIndex = updatedUsers.findIndex(p => p.id === user.id);
        updatedUsers[oldPostIndex] = user;
        this.users = updatedUsers;
        this.usersUpdated.next([...this.users]);
      });
  }
}
