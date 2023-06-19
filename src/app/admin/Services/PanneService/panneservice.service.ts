import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanneserviceService {

  constructor(private http:HttpClient) { }

  url ="http://localhost:8081/api/v1/panne/"


  getAllPanne(){
    return this.http.get(this.url+"getallpannes")
  }
  getPanneById(id:any){
    return this.http.get(this.url+"getpanne/"+id)
  }
  getclientbyascid(id:any){
    return this.http.get(this.url+"getclientbyascid/"+id)
  }

  getPanneByIdpanne(id:any){
    return this.http.get(this.url+"getpannebyid/"+id)
  }
}
