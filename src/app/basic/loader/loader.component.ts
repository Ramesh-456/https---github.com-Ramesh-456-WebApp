import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit,OnDestroy{
  spinnerSubscription !: Subscription;
constructor(private loaderService:LoaderService){

}
  ngOnDestroy(): void {
   if(this.spinnerSubscription){
    this.spinnerSubscription.unsubscribe();
   }
  }
  ngOnInit(): void {
    this.spinnerSubscription = this.loaderService.getLoaderValue().subscribe(value=>{
      this.showLoader = value
    })
  }

  showLoader:boolean=false;
  show(){
    this.showLoader = true;
  }
  hide(){
this.showLoader = false;
  }
}
