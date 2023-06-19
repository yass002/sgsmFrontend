import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Clientservices {


  url = environment.URL
  url2="http://localhost:8081/api/v1/panne"
  constructor(private http: HttpClient ) { }


  getAsc(id:any):Observable<any>{
    return this.http.get(this.url+"/getAsc/"+id)
  }
  addAsc(asc:FormData,id:any){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    const options = { headers: headers };
    return this.http.post(this.url+"/ajoutAsc/"+id,asc,options)
  }

  signalerPanne(data:any,id:any){
    return this.http.post(this.url2+'/ajoutpanne/'+id,data)
  }

}
