import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BaseErrorControlService {

  constructor( private router:Router) { }
   handleErrorResponse(error:any){
    if(error.error.status===401 && error.error.message==='Session expired'){
      localStorage.clear();
      this.router.navigate(['login'])
    }
   console.log(error);
   
  }
}
