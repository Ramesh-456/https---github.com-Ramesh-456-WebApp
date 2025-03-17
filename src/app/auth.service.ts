import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   headers = new HttpHeaders({
    'Content-Type': 'application/json', // Set your desired content type
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Add any authorization token if needed
  });
  constructor(private http:HttpClient) { }
login(userCredentials:any){
  this.http.post("http://localhost:8080/user/login",userCredentials,{headers:this.headers})
}

}
