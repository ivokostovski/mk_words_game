import { Injectable } from '@angular/core';

import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class PointsService {

    constructor(private userService: UserService, private authService: AuthService) {}

    currentGamePoints = 0;
    latestGamePoints = 0;
    totalUserPoints: number;

    addPointsForCurrentGame(currentWordPoints) {
        this.currentGamePoints += currentWordPoints;
        console.log(this.currentGamePoints);
    }

    getLatestGamePoints() {
        return this.latestGamePoints;
    }

    async getUserTotalPoints() {
        const currentUserId = this.authService.getUserId();
        const currentUser = this.userService.getUser(currentUserId);
        await currentUser.subscribe(user => {
            this.totalUserPoints = user.points;
            console.log(user.points);
        });
        console.log(this.totalUserPoints);
        return this.totalUserPoints;
    }

    restCurrentGamePoints() {
        this.currentGamePoints = 0;
    }

    addPointsToUser() {
        this.latestGamePoints = this.currentGamePoints;
        const currentUserId = this.authService.getUserId();
        const currentUser = this.userService.getUser(currentUserId);
        currentUser.subscribe(user => {
            this.userService.updateUser(user._id, user.name, user.password, user.email, this.currentGamePoints);
            this.restCurrentGamePoints();
        });
    }
}
