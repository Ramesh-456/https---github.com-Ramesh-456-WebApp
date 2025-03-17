import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loader= new BehaviorSubject<boolean>(false);


  constructor() { }
  
  show(){
    this.loader.next(true);
  }
  hide(){
    this.loader.next(false);
  }
  getLoaderValue(){
    return  this.loader.asObservable();
  }
  
}
