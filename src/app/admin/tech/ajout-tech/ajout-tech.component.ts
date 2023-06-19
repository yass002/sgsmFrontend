import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from '../../Services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-tech',
  templateUrl: './ajout-tech.component.html',
  styleUrls: ['./ajout-tech.component.scss']
})
export class AjoutTechComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private ts: ServicesService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  Technicien = this.formBuilder.group(
    {
      firstName: [],
      lastName: [],
      numTel: [],
      email: [],
      adresse: [],
      descTech: []
  
    }
  )
  
 
  
    ajouterTechnicien(){
      this.ts.ajouterTech(this.Technicien.value).subscribe(
        (data:any)=>{
          console.log(data);
          this.router.navigate(['acceuil/consultertech'])
        },
        err=>{
          console.log(err)
        }
      )
      
    } 
  
   
}
