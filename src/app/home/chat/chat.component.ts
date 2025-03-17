import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ChatInfos, ChatUserDTO } from 'src/app/pojos/interfaces';
import { ApiCallService } from 'src/app/services/api-call.service';
import { BaseErrorControlService } from 'src/app/services/base-error-control.service';
import { WbService } from 'src/app/services/wb.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  currentUser : String = "";
  userDetList:ChatUserDTO[] = [];
  @Output()
  closeChatEvent:EventEmitter<boolean> = new EventEmitter();
startChat: Boolean = false;
chatDetails: ChatInfos[] = [];
  chatReceiver!: ChatUserDTO;
  chatFormGroup!:FormGroup;
  closeChat(){
    this.closeChatEvent.emit(false)
  }
  constructor(private apiCall:ApiCallService,private fb:FormBuilder,private wb:WbService,
    private base:BaseErrorControlService){
    this.chatFormGroup = this.fb.group({
      chatInput:"Helo"
    })
  }
  ngOnInit(){
    this.wb.sendValue.subscribe((value:any)=>{
      let chatInfo :ChatInfos= JSON.parse(value);
      this.chatDetails.push(chatInfo);
      
    })
    let url = "chat/getChatUsers"
    url = this.apiCall.mergeUrlWithApiUrl(url);
  //  let requestOptions = {
  //   method:'GET',
  //   headers:{'Content-Type': 'application/json'}
  //  }
  //  fetch(url,requestOptions).then((value:any)=>{
  //   console.log(value);
  //  }).catch((error:any)=>console.log(error));


   this.apiCall.getRequest(url,true).subscribe(value=>{
    this.userDetList = value;
    this.currentUser = localStorage.getItem("userId")?localStorage.getItem("userId") as String:"";
   },(error:Error)=>{
    this.base.handleErrorResponse(error)
    console.log(error)

   })
   
  }
  individualChat(receiverUser:ChatUserDTO){
    console.log(receiverUser)
    this.startChat = true;
    this.chatReceiver = receiverUser;
  }
  sendMsg(chatReceiver:ChatUserDTO){
    if(this.chatFormGroup.controls['chatInput'].value){
      let chatMsg : ChatInfos = {};
      chatMsg.sender = this.currentUser;
      chatMsg.receiver = chatReceiver.userId;
      chatMsg.senderMsg = this.chatFormGroup.controls['chatInput'].value;
      chatMsg.sendingTime = new Date().toTimeString();
      console.log(chatMsg)
      this.chatDetails.push(chatMsg);

      let url = "chat/sendMsg";
      url = this.apiCall.mergeUrlWithApiUrl(url);
      let obs = this.apiCall.postRequest(url,chatMsg,false) as Observable<any>;
      obs.subscribe((response:any)=>{
        console.log(response);
      })
    }

    


    this.chatFormGroup.controls['chatInput'].reset();
  }
  exportUserData(){
    let url = "chat/report?reportType=pdf"
    url = this.apiCall.mergeUrlWithApiUrl(url);

   this.apiCall.getRequest(url,true).subscribe(value=>{
    console.log(value);
    

    // this.userDetList = value;
    // this.currentUser = localStorage.getItem("userId")?localStorage.getItem("userId") as String:"";
   },(error:Error)=>{
    this.base.handleErrorResponse(error)
    console.log(error)

   })
  }
}
