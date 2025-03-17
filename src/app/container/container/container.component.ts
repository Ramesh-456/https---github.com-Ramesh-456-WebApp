import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WbService } from 'src/app/services/wb.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

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
