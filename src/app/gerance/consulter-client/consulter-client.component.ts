import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/Entities/User';
import { ServicesService } from 'src/app/admin/Services/services.service';
import { ToastrService } from 'ngx-toastr';
import { param } from 'jquery';

@Component({
  selector: 'app-consulter-client',
  templateUrl: './consulter-client.component.html',
  styleUrls: ['./consulter-client.component.scss']
})
export class ConsulterClientComponent implements OnInit {

  msgRetour:any
  id:any
  constructor(
    private router:Router,
    private services: ServicesService,
    private modalService: NgbModal,
    private tost:ToastrService,
  
    ) {
     
     
      
    
     }

  ngOnInit(): void {
    console.log(this.id)
    this.getAllUsers()
  }
  users:User[]=[]
  TryToModify={
    name:"",
    prenom:""
  }
  ClientToUpdate={
    firstName:"",
    lastName: "",
    numTel: "",
    numFix: "",
    email:"",
    adresse: "",
  }
  
gotoAddClient(){
  this.router.navigate(['acceuil/gerance/ajoutclient'])
}


//ouverture de modal et affecter les informations de utilisateur a la variable trytomodify pour mettre apres dans le head de modal
openModal( exampleModalContent, id:any ) {
  this.modalService.open( exampleModalContent, { size : 'lg' } );
  this.services.getbyId(id).subscribe(
  data =>{
    this.TryToModify.name=data.firstName
    this.TryToModify.prenom=data.lastName
    this.ClientToUpdate=data
    
  }
  )
}

openModalforverif( verif, id:any ) {
  this.modalService.open( verif, { size : 'md' } );
  
}


getAllUsers(){
  this.services.getAll().subscribe(
    data=>{
      this.users=data
    },
    err=>{
      console.log("erreur = ",err)
    }
  )
}
updateClient(){
  this.services.updateUser(this.ClientToUpdate).subscribe(
    data=>{
      this.msgRetour=data
      this.tost.success(this.msgRetour.details, this.msgRetour.message , {timeOut:2500,progressBar:true,progressAnimation:'increasing'});
      this.getAllUsers()
      this.modalService.dismissAll()
      
    },
    err=>{
      console.log(err)
    }
    )
}
}
