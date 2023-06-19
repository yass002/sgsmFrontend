import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Clientservices } from '../../Services/clientservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Panne } from 'src/app/Entities/Panne.model';

@Component({
  selector: 'app-declarerpanne',
  templateUrl: './declarerpanne.component.html',
  styleUrls: ['./declarerpanne.component.scss']
})
export class DeclarerpanneComponent implements OnInit {

  constructor(
    private formbuilder:FormBuilder,
    private cs:Clientservices, 
    private route:Router,
    private activedRoute: ActivatedRoute
    ) { }

    id:any
    @Input() clientId:any
  ngOnInit(): void {
    this.id=this.activedRoute.snapshot.paramMap.get('id')
  
  }

  typePanne =[
     'Bruit',
     'Porte',
     'Autres'
    ]
  
 
  Panne = this.formbuilder.group(
    {
     
      descPanne : ["" , [Validators.required]],
     // etatPanne : this.formbuilder.array([]),
      
    }
  )

  handlepanne(e:any){
    let listepanne = this.Panne.get('etatPanne') as FormArray
    if (e.target.checked){
      listepanne.push(new FormControl(e.target.value))
    }
    else {
      let i=0;
      listepanne.controls.forEach(
        (l:any)=>{
          if (l.value==e.target.value){
            listepanne.removeAt(i)
            return;
          }
          i++;
        }
      )

    }
 
  }
  savedData:Panne={
    descPanne : ""
  
  }

  declarerpanne(){
 
    this.cs.signalerPanne(this.Panne.value ,this.id).subscribe(
        data=>{
          this.clientId = localStorage.getItem("idClient")
          this.route.navigate(['/client/sgsm/'+this.clientId])
        },
        err=>{
          console.log(err)
        }
    )
    
   //console.log(this.Panne.value)
  }

}
