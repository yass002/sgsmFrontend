import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.scss']
})
export class AffectationComponent implements OnInit {

  constructor(
    private ts:ServicesService
  ) { }

  ngOnInit(): void {
    this.getAllTechnicien()
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
}
