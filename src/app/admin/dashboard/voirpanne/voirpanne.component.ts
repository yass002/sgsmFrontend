import { Component, OnInit } from '@angular/core';
import { PanneserviceService } from '../../Services/PanneService/panneservice.service';

@Component({
  selector: 'app-voirpanne',
  templateUrl: './voirpanne.component.html',
  styleUrls: ['./voirpanne.component.scss']
})
export class VoirpanneComponent implements OnInit {

  constructor(private ps:PanneserviceService) { }

  ngOnInit(): void {
    this.getAllPanne()
    console.log(this.getAllPanne())
  }
  pannedAsc:any


  getAllPanne(){
    this.ps.getAllPanne().subscribe(
      data=>{
        this.pannedAsc=data
        console.log(data)
      },
      err=>{
        console.log(err)
      }
    )
  }
}
