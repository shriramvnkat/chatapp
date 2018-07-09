import { Component } from '@angular/core';
//import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  socket : any;
  constructor(){
    // this.socket = io('http://localhost:8080');
    // this.socket.on('news', function (data) {
    //   console.log(data);
    // });
  }
}
