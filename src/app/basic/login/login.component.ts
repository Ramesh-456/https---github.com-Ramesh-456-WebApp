import { Location } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { catchError, tap, throwError } from 'rxjs';
import { ApiCallService } from 'src/app/services/api-call.service';
import { TranslatorService } from 'src/app/services/translator.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginGroup!:FormGroup;
public style!:HTMLLinkElement
  constructor(private location:Location,private formBuilder:FormBuilder,private http:HttpClient,
    private router:Router,private ms:MessageService,translatorService:TranslatorService,
  public apiService:ApiCallService){
    this.style = document.createElement('link');
    this.style.rel = 'stylesheet';
		document.head.appendChild(this.style);
    this.loginGroup = this.formBuilder.group({
      userId:"",
      userPassword:""
    })

  }
  ngOnInit(): void {
    console.log("hittinh login component");
   if(localStorage.getItem("accessToken")){
    this.router.navigate([''])
   }
  }
  setTheme(value:string){
    if(value && value != null && value.trim().length != 0){
			this.style.href = `${value}.css`;
		}
  }

  login(){
    let userCriteria = this.loginGroup.value;
    let url = "user/login"
    url = this.mergeUrlWithApiUrl(url);
    // let loginObservable = this.http.post(url,userCriteria).pipe(tap(value=>{}))
    let loginObservable = this.apiService.postRequest(url,userCriteria,true).pipe(
      catchError(err => {
        console.log('Handling error locally and rethrowing it...', err);
        return throwError(err);
        
    })
    )
    .subscribe((response:any)=>{
if(response?.status==='SUCCESS'){
  if(response?.accessMessage==='Access allowed'){
    localStorage.setItem("userId",response?.userId);
    localStorage.setItem("accessToken",response?.accessToken);
    this.router.navigate([''])
  }
}else if(response?.status=='FAILURE'){
  this.ms.add({  severity:'error' ,
    summary: 'Login failed',
    detail: response['accessMessage']})
}

    

    },
    (err:HttpErrorResponse) => {
      if(err.status==0){
        this.ms.add({  severity:'error' ,
          summary: 'Network error',
          detail: 'Please check your network connection'})
          }
      }
    
  )
    

  }


  mergeUrlWithApiUrl(url:string):string{
    let globalUrl = environment.apiUrl
    if (url.startsWith('/')) {
      url = url.slice(1)
  }
  return globalUrl.concat(url);
}



}
