import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  url = environment.URL;
  urlTech = "http://localhost:8081/api/v1/technicien/";
  urlTache="http://localhost:8081/api/v1/tache/"
  getAll(): Observable<any>{
    return this.http.get(this.url+"/getAllUsers")
  }
  getbyId(id:any): Observable<any> {
    return this.http.get(this.url+"/getuserbyid/"+id)
  }
  updateUser(user:any): Observable<any>{
    return this.http.put(this.url+"/updateuser",user)
  }
  getRole(id:any ):Observable<any>{
   return  this.http.get(this.url+"/getrole/"+id)
  }
  getAllClientInfo(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    const options = { headers: headers };
    return this.http.get(this.url+"/user",options)
  }

  getidClient(){
    const headers = new HttpHeaders(
      {
        'Authorization':'Bearer '+localStorage.getItem('token')
      }
    );
    const options={headers: headers}
    return this.http.get(this.url+'/getclientid',options)
  }
  ajouterClient(data:any){
const headers = new HttpHeaders();
headers.append('Content-Type', 'multipart/form-data');
const options = { headers: headers };

    return this.http.post(this.url+"/ajouteclients",data,options);
  }
 
getAllTechnicien():Observable<any>{
 return  this.http.get(this.urlTech+"getalltechnicien")
}
ajouterTech(data:any){
  return this.http.post(this.urlTech+"ajoutertechnicien",data)
}
suppTech(id:any){
  return this.http.delete(this.urlTech+"deletetech/"+id)
}

addTach(tache:any,id:any){
  return this.http.post(this.urlTache+"ajouttache/"+id,tache)
}
getTechById(id:any):Observable<any>{
  return this.http.get(this.urlTech+"gettechbyid/"+id)
}


getListofIdOfPannedAscByTech(id:any){
  return this.http.get(this.urlTache+"getascbyidtech/"+id)
}
getascpanne(id:any){
  return this.http.get(this.url+"/getascbyid/"+id)
}

getPannedAscbyCLient(id:any):Observable<any>{
  return this.http.get(this.url+"/getpannedasc/"+id)
}
}
