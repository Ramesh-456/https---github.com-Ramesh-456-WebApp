import { Component } from '@angular/core';

@Component({
  selector: 'practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
   dialog:any
constructor(){
 
  
}
openPopUp(){
  this.dialog = document?.getElementById("dialog") as HTMLElement
  this.dialog.showModal();
}
openModal(){
  this.dialog = document?.getElementById("dialog") as HTMLDialogElement
  this.dialog.show();
}
closeDialog(){
  this.dialog = document?.getElementById("dialog") as HTMLElement
  this.dialog.close();
}
}
