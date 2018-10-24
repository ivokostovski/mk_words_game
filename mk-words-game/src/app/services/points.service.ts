import { Injectable } from '@angular/core';

import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PointsService {

    constructor(private userService: UserService, private authService: AuthService) {}

    currentGamePoints = 0;
    latestGamePoints = 0;
    totalUserPoints: number;
    private pointsListener = new Subject<number>();

    addPointsForCurrentGame(currentWordPoints) {
        this.currentGamePoints += currentWordPoints;
    }

    getLatestGamePoints() {
        return this.latestGamePoints;
    }

    getPointsListener() {
        return this.pointsListener.asObservable();
    }

    getUserTotalPoints() {
        const currentUserId = this.authService.getUserId();
        const currentUser = this.userService.getUser(currentUserId);
        currentUser.subscribe(user => {
            this.pointsListener.next(user.points);
        });
    }

    restCurrentGamePoints() {
        this.currentGamePoints = 0;
    }

    addPointsToUser() {
        this.latestGamePoints = this.currentGamePoints;
        const currentUserId = this.authService.getUserId();
        const currentUser = this.userService.getUser(currentUserId);
        currentUser.subscribe(user => {
            const totalPoints = user.points + this.currentGamePoints;
            this.userService.updateUser(user._id, user.name, user.password, user.email, totalPoints);
            this.restCurrentGamePoints();
        });
    }
}
