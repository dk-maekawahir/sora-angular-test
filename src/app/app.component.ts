import { Component, OnInit } from '@angular/core';
import { ConnectionOptions, ConnectionPublisher, default as Sora } from 'sora-js-sdk';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const sora = Sora.connection("ws://192.0.2.100:5000/signaling", true);
  }
  title = 'sora-ng-problem';
}
