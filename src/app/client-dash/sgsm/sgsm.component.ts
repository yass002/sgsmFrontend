import { Component, Input, OnInit } from '@angular/core';
import { Clientservices } from '../Services/clientservices.service';
import { ServicesService } from 'src/app/admin/Services/services.service';
import { Ascenseur } from 'src/app/Entities/Ascenseur.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { AdminService } from 'src/app/admin/admin.service';
import { PanneserviceService } from 'src/app/admin/Services/PanneService/panneservice.service';

@Component({
  selector: 'app-sgsm',
  templateUrl: './sgsm.component.html',
  styleUrls: ['./sgsm.component.scss']
})
export class SgsmComponent implements OnInit {

  constructor(
    private cs:Clientservices,
     private dd:ServicesService, 
     private ps:PanneserviceService,
     private route:ActivatedRoute,
     private http:HttpClient,
     public domSanitizer: DomSanitizer,
     private as:AdminService,
     ) 
  {
    this.id = this.route.snapshot.paramMap.get('id');
   }
   images: Array<any> = new Array();
  ascenseur:Ascenseur
  authClientId:any
   res:any
   uploadedImage: File;  
   dbImage:any; 
   postResponse: any;
   successResponse: string;
   image: any;
   role:any
   searchText:string=""
   panne:any
   stylePanne:String="border: 4px solid red;"

   id:any

  ngOnInit(): void {
  this.getClientData()
  this.getRole()
  this.getAllPannes()
  }

  












  getRole(){
    let token = localStorage.getItem("token")
   let decodeToken = this.as.decodeToken(token)
   console.log(decodeToken)
   this.role = decodeToken.Authority[0].authority
  }

  getClientData(){
  this.dd.getAllClientInfo().subscribe(
    data=>{
      this.res=data
   
      this.authClientId=this.res.id
      localStorage.setItem("idClient",this.res.id)
      this.cs.getAsc(this.id).subscribe(
        data=>{
          this.ascenseur=data
          console.log(this.ascenseur)
         
  

        }
      )
    }
  )  
  }


 getAllPannes(){
  this.ps.getAllPanne().subscribe(
    data=>{
      this.panne=data
      console.log(this.panne)
    },
    err=>{
      console.log(err)
    }
  )
  






}



}
