import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../admin/Services/services.service';
import { ActivatedRoute } from '@angular/router';
import { PanneserviceService } from '../admin/Services/PanneService/panneservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-teches',
  templateUrl: './teches.component.html',
  styleUrls: ['./teches.component.scss']
})
export class TechesComponent implements OnInit {

  constructor(
    private ts:ServicesService,
    private activatedRoute:ActivatedRoute,
    private ps:PanneserviceService,
    private tost:ToastrService

  ) { }

  idpanne:any
  idtech:any
  tache={
    tech:{
      id: "",
      firstName: "",
      lastName: "",
      numTel: "",
      adresse: "",
      email: "",
      descTech: "",
      role: ""
    },
    idpanne:"",
    idascenseurs:''
  }
  res:any
  
  ascenseur:any
  ngOnInit(): void {
    this.getAllTechnicien()
    this.idpanne = this.activatedRoute.snapshot.paramMap.get('id')
  }
  technicien:any

  getAllTechnicien(){
    this.ts.getAllTechnicien().subscribe(
      data=>{
        this.technicien=data
      },
      err=>{
        console.log(err)
      }
    )
  }

  affecter(idtech:any){
    //get object technicien by id
    this.ts.getTechById(idtech).subscribe(
      data=>{
        this.tache.tech = data
        this.tache.idpanne=this.idpanne  
        this.ps.getPanneByIdpanne(this.tache.idpanne).subscribe(
          data=>{
            
            this.ascenseur=data
            this.tache.idascenseurs=this.ascenseur.ascenseur.id
            this.ts.addTach(this.tache,idtech).subscribe(
              data=>{
                console.log(data)
                this.res=data
                switch (this.res.success){
                  case true : 
                  this.tost.success( this.res.message, this.res.details , {timeOut:2500,progressBar:true,progressAnimation:'increasing'});
                  break;
                  case false : 
                  this.tost.warning(this.res.message, this.res.details , {timeOut:2500,progressBar:true,progressAnimation:'increasing'});
                  break;
                }
    
              },
              err=>{
                console.log(err)
              }
            )
          },
          err=>{
            console.log(err)
          }
        )

      },
      err=>{
        console.log(err)
      }
    )
    //end

    //test
      console.log(this.tache.tech.id)
    //end test

 
   


  



    
  }

}
