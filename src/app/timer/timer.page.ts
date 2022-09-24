import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage {

  countdown: number;

  startTimeStr: String;
  startTime: string;

  constructor(private router: Router) {
    this.startTime = new Date().toDateString();
  }

  startCountdown() {
    console.log(this.countdown);
    this.router.navigate(['cd', this.countdown]);

  }

}
