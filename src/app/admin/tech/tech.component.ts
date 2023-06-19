import { Component, OnInit } from '@angular/core';
import { Technicien } from 'src/app/Entities/Technicien.model';
import { ServicesService } from '../Services/services.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

  constructor(
    private ts:ServicesService,
    private router:Router,
    private modalService:NgbModal

  ) { }
  technicien:Technicien
    idTechDeleted:any
    id:any
  ngOnInit(): void {
    this.getAllTech()
    
  }

  ajoutertech(){
    this.router.navigate(['acceuil/ajouttech/'])
  }
  openModalforverif( verif, id:any ) {
    this.modalService.open( verif, { size : 'md' } );
   this.idTechDeleted=id 
  }

  getAllTech(){
    this.ts.getAllTechnicien().subscribe(
      data=>{
        this.technicien=data
      },
      err=>{
        console.log(err)
      }
    )
  }

  deletetech(id:any){
    id=this.idTechDeleted
    this.ts.suppTech(id).subscribe(
      data=>{
        this.getAllTech()
        this.modalService.dismissAll()
        console.log(data)
    
      },
      err=>{
        console.log(err)
      }
    )
  }

}
