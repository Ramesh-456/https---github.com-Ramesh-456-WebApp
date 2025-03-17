import { EventEmitter, Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import { ApiCallService } from './api-call.service';

@Injectable({
  providedIn: 'root'
})
export class WbService {
  private stompClient!: Stomp.Client;
  sendValue:EventEmitter<any> = new EventEmitter();
  constructor(private apiCall:ApiCallService) { }

  public connect() {
    // const socket = new SockJS('http://localhost:8080/wbsocket'); // URL to your WebSocket endpoint
    // this.stompClient = Stomp.over(socket);
    // this.stompClient.connect({}, () => {
    //   console.log("connecting");
      
    //   this.stompClient.subscribe('/topic/received-messages', (message) => {
    //     console.log('Received message:', message.body);
    //     // Handle received messages here
    //   });
    // });

    let that = this;
    let responseBody = null;
    let headers = {
      "X-AUTH-TOKEN": "websocket"
    };
    let httpurl = this.apiCall.mergeUrlWithApiUrl("/connect/ws");
    const hasHttps = httpurl.startsWith('https://');
    const replacement = hasHttps ? 'wss:' : 'ws:';
    let wsURL = httpurl.replace(/^https?:/, replacement);
    let socket = new WebSocket(wsURL);
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect(headers, (frame: any) => {
      responseBody = that.afterWsConnect(frame);
    });
  }

    afterWsConnect(frame:any) {
      this.stompClient.subscribe("/user/"+localStorage.getItem("userId")+"/", (message: any) => {
        this.sendValue.emit(message.body);
       
        
      });
  }
}
