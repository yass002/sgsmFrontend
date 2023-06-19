import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Ascenseur } from 'src/app/Entities/Ascenseur.model';
import { User } from 'src/app/Entities/User';
import { fileHandle } from 'src/app/Entities/file-handler.model';
import { ServicesService } from 'src/app/admin/Services/services.service';

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.scss']
})
export class AjoutClientComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
     private cs: ServicesService,
     private route:Router
     
     ) { }

  ngOnInit(): void {
  }
Client = this.formBuilder.group(
  {
    firstName: [],
    lastName: [],
    numTel: [],
    numFix: [],
    email: [],
    adresse: [],
    ascenseur: this.formBuilder.array(
      [ 
        this.formBuilder.group(
          {
            marque: [],
            image: []
          }
        )
      ]
    )

  }
)
ascenseur: Ascenseur={
  marque: "",
  ref: "",
  image: [],
  imageName:"",
  id: 0,
  id_client: 0
} 

  onFileSelected(event){
    if (event.target.files){
      const file = event.target.files[0];
      const fileHandle :fileHandle = {
        file: file,
       
      }
      this.ascenseur.image.push(fileHandle)
    }
  }

  ajouterClient(){
    
    const formData = new FormData();
    formData.append(
      'client',
      new Blob([JSON.stringify(this.Client.value)], {type:'application/json'} )
    );
    let ascenseurArray = this.Client.get('ascenseur').value ;
    formData.append(
      'ascenseurs',
      new Blob([JSON.stringify(ascenseurArray)], {type:'application/json'} )
    );
    for (var i=0 ; i < this.ascenseur.image.length; i++){
      formData.append(
        'image',
        this.ascenseur.image[i].file,
        this.ascenseur.image[i].file.name
      );
    }
     this.cs.ajouterClient(formData).subscribe(
      data=>{
        this.route.navigate(['acceuil/gerance/consulterclient'])
      },
      err=>{
        console.log(err)
      }
     )
  } 
  get getAscenseur(){
    return this.Client.get('ascenseur') as FormArray
  }
  addnew(){
    let newAsc = this.formBuilder.group(
      {
        marque: "",
        image: []
      }
    )
    this.getAscenseur.push(newAsc)
  }

  delete(i:any){
    this.getAscenseur.removeAt(i)
  }
}

