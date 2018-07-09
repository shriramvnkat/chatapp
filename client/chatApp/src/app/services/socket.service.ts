import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

	private BASE_URL = 'http://localhost:8080';  
  	private socket;

  	constructor() {
  		this.socket = io(this.BASE_URL);
  	}


 	sendMessage(msg):Observable<Object>{
		this.socket.emit('chat message',msg);
		 let observable = new Observable(observer => {
			this.socket.on('chat',function(resp){
				observer.next(resp); 
				observer.complete();   
			});
			
		 });
		 return observable;

 	}




}
