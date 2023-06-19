import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url='http://localhost:8081/api/v1/auth'
  constructor(private http:HttpClient, private router:Router) { }

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  login(data:any){

    return this.http.post(this.url+'/authenticate',data)

  }
 

  decodeToken(token:any){
  localStorage.setItem("token",token)
  let decodeToken:any= jwt_decode(token) 
  return decodeToken
  }
  
  returnRole(token:any){
    localStorage.setItem("token",token)
  let decodeToken:any= jwt_decode(token) 
  return decodeToken
  }

  isLoggedIn(){
    let token = localStorage.getItem("token")
    if (token)
    {return true}
    else
    {return false}
  }
  loggingOut() {
    localStorage.removeItem('token');
  }
}
