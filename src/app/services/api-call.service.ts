import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { Observable, catchError, finalize, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoaderComponent } from '../basic/loader/loader.component';
import { LoaderService } from './loader.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  @ViewChild(LoaderComponent) loaderComponent!: LoaderComponent;


  constructor(private http:HttpClient,private loaderService:LoaderService,private router:Router) { }
  postRequest(requestUrl:string,criteria:any,wantLoader?:boolean):Observable<any>{
    if(wantLoader){
      this.loaderService.show();
    }
    return this.http.post(requestUrl,criteria).pipe(tap(obj=>{
      if(wantLoader){
        this.loaderService.hide()
      }
    }),catchError(error=>{
return throwError(error);
    }),
    finalize(() => {
      // Hide the spinner when the request completes (either success or error)
      this.loaderService.hide();
    }));
  }
  mergeUrlWithApiUrl(url:string):string{
    let globalUrl = environment.apiUrl
    if (url.startsWith('/')) {
      url = url.slice(1)
  }
  return globalUrl.concat(url);
}
getRequest(requestUrl:string,wantLoader?:boolean):Observable<any>{
  if(wantLoader){
    this.loaderService.show();
  }
  return this.http.get(requestUrl).pipe(tap(obj=>{
    if(wantLoader){
      this.loaderService.hide();
    }
  }),catchError(error=>{
    this.handleErrorResponse(error)
    return throwError(error);
        }),
        finalize(() => {
          // Hide the spinner when the request completes (either success or error)
          this.loaderService.hide();
        }));
}
handleErrorResponse(error?:any){
  if(error instanceof HttpErrorResponse ){
    if(error.status ===  401 && error.error.error ==="Unauthorized"){
      localStorage.clear()
      this.router.navigate(['/login']);
    }
  }
}
}
