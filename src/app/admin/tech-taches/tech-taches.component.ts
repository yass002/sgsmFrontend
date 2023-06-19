import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tech-taches',
  templateUrl: './tech-taches.component.html',
  styleUrls: ['./tech-taches.component.scss']
})
export class TechTachesComponent implements OnInit {
  idTech:any

  constructor(
    private ss:ServicesService,
    private activatedroute:ActivatedRoute
  ) { }
    asc=Array()
  ngOnInit(): void {
    this.idTech= this.activatedroute.snapshot.paramMap.get('id')
    this.getAscForTheTech()
  }


  getAscForTheTech(){
      this.ss.getListofIdOfPannedAscByTech(this.idTech).subscribe(
        data=>{
          for (const i in data){
            this.ss.getascpanne(data[i]).subscribe(
              data=>{
                this.asc.push(data)
                console.log(this.asc)
              },
              err=>{
                console.log(err)
              }
            )
          }
        },
        err=>{
          console.log(err)
        }
      )
  }

}
