import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service'
@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit {

   userHistory : any = {};
  constructor(private socketservice: SocketService) { 
    this.userHistory.messageList = [];
    this.userHistory.senderId = '1';
    this.userHistory.message = '';
  }

  ngOnInit() {
   
  }

  sendMessage(){
  let message = this.userHistory.message;
  this.userHistory.message = '';
  let sendMessage : any = {
    data:message,
    senderId : 1,
    receiverId :1
        } 
        this.userHistory.messageList.push(sendMessage);
      this.socketservice.sendMessage(sendMessage).subscribe((res:Response) =>{
        console.log(res,"res");
        let result : any= res;
        if(result){
          this.userHistory.messageList.push(result);
        }
      }); 
  }




}
