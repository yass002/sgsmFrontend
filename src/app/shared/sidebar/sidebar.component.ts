import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/admin/Services/services.service';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public uiBasicCollapsed = false;
  public uiBasicCollapsede = false;

  public samplePagesCollapsed = false;
  token:any;
  decodedToken:any
  show=false;
  id:any
  constructor(private service:ServicesService , private as:AdminService) { }

  ngOnInit() {
    this.setId()
    console.log(this.id)
    this.displayselonrole()
    const body = document.querySelector('body');

    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }
  displayselonrole(){
    if (this.as.isLoggedIn()){
       this.token = localStorage.getItem("token")
        this.decodedToken=this.as.decodeToken(this.token)
        console.log(this.decodedToken.Authority[0].authority)
        if (this.decodedToken.Authority[0].authority=="Admin"){
          this.show=true
        }
        
    }
  }
  //njib id user l conncté
  

  setId(){
    this.service.getidClient().subscribe(
      data=>{
        this.id=data
      //  console.log(data)
      },
      err=>{
        console.log(err)
      }
    )
  }
}
