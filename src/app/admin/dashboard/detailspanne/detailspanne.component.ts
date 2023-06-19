import { Component, OnInit } from '@angular/core';
import { PanneserviceService } from '../../Services/PanneService/panneservice.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Entities/User';

@Component({
  selector: 'app-detailspanne',
  templateUrl: './detailspanne.component.html',
  styleUrls: ['./detailspanne.component.scss']
})
export class DetailspanneComponent implements OnInit {

  constructor(
    private ps:PanneserviceService,
    private activatedRoute:ActivatedRoute
  )
   { }

    id:any
    panneDetails:any
    clientdata:any
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    console.log(this.id)
    this.getPanneDetailsById()
  }

  getPanneDetailsById(){
    this.ps.getPanneById(this.id).subscribe
    (
      data=>{
        this.panneDetails=data
        this.ps.getclientbyascid(this.panneDetails.ascenseur.id).subscribe(
          data=>{
           this.clientdata=data
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
  }

}
