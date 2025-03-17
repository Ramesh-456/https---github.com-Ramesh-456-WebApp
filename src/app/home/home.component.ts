import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WbService } from '../services/wb.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

goChat: boolean = false;
constructor(private router:Router,private wb:WbService){
  if(localStorage.length==0){
    this.router.navigate(["login"])
  }
}
  ngOnInit(): void {
    this.wb.connect();
    
  }
gotoChat(){
  this.goChat = true;
}
closeChat(event: boolean) {
  this.goChat = event
  }
}
