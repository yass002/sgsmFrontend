import { Component, OnInit } from '@angular/core';
import { fileHandle } from 'src/app/Entities/file-handler.model';
import { Ascenseur } from 'src/app/Entities/Ascenseur.model';
import { Clientservices } from '../Services/clientservices.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-asc',
  templateUrl: './add-asc.component.html',
  styleUrls: ['./add-asc.component.scss']
})
export class AddAscComponent implements OnInit {

  constructor(
    private ascservice:Clientservices, 
    private http : HttpClient, 
    public domSanitizer: DomSanitizer,
    private activatedRoute:ActivatedRoute
    ) 
  {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {

  }
  uploadedImage: File;  
  dbImage: any; 
  postResponse: any;
  successResponse: string;
  image: any;
  id:any
  images= new Array()
    ascenseur: Ascenseur={
    marque: "",
    ref: "",
    image: [],
    imageName:"",
    id: 0,
    id_client: 0
  } 

  addAsc(){
    const ascFormData =  this.prepareFormData(this.ascenseur)
    this.ascservice.addAsc(ascFormData,this.id).subscribe(
      data=>{
        console.log(data)
      },
      err=>{
        console.log(err)
      }
    );
  }
  prepareFormData(asc:Ascenseur):FormData {
    const formData = new FormData()
    formData.append(
      'ascenseur',
      new Blob([JSON.stringify(this.ascenseur)], {type:'application/json'} )
    );
    for (var i=0 ; i < this.ascenseur.image.length; i++){
      formData.append(
        'image',
        this.ascenseur.image[i].file,
        this.ascenseur.image[i].file.name
      );
    }
    return formData
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


  
}
