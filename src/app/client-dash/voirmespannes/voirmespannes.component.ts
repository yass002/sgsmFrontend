import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/admin/Services/services.service';

@Component({
  selector: 'app-voirmespannes',
  templateUrl: './voirmespannes.component.html',
  styleUrls: ['./voirmespannes.component.scss']
})
export class VoirmespannesComponent implements OnInit {

  constructor(
    private ss:ServicesService
  ) { }

  ngOnInit(): void {
    this.id=localStorage.getItem("idClient")
    this.getPannedAsc()
  }


  listedPanne:any
  id:any

  getPannedAsc(){
    this.ss.getPannedAscbyCLient(this.id).subscribe(
      data=>{
        console.log(data)
        this.listedPanne=data
      },
      err=>{
        console.log(err)
      }
    )
  }
}
