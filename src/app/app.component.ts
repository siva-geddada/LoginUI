import { Version } from '@angular/compiler';
import { Component } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  leftTime!: any;
  constructor(private userIdle: UserIdleService) {}
  ngOnInit(): void {
    //Start watching for user inactivity.
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe((count) => {
      this.leftTime = count;
      console.log(count);
    });

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => {
      console.log('Time is up!');
      // this.restart();
      this.stop();
      this.stopWatching();
    });
  }

  stop() {
    this.userIdle.stopTimer();
  }

  stopWatching() {
    this.userIdle.stopWatching();
  }

  startWatching() {
    this.userIdle.startWatching();
  }

  restart() {
    this.userIdle.resetTimer();
  }

  config: CountdownConfig = {
    leftTime: 60,
    format: 'mm:ss',
    prettyText: (text) => {
      return text
        .split(':')
        .map((v) => `<span class="item">${v}</span>`)
        .join('');
    },
  };

  handleEvent(e: CountdownEvent) {
    console.log('Actions', e);
  }
}
