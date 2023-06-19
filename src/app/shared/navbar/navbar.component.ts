import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from 'src/app/admin/Services/services.service';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  public iconOnlyToggled = false;
  public sidebarToggled = false;
  res:any
  fullName:any
  constructor(config: NgbDropdownConfig, private as:AdminService, private router:Router,private service:ServicesService) {
    config.placement = 'bottom-right';
  }

  ngOnInit() {
  this.name()
  }


logout(){
  this.as.loggingOut()
  
}

name(){
  if (this.as.isLoggedIn()){
  this.service.getAllClientInfo().subscribe(
    data=>{
      this.res=data
    this.fullName= this.res.firstName.charAt(0).toUpperCase()+this.res.firstName.slice(1) +" "
    +this.res.lastName.charAt(0).toUpperCase()+this.res.lastName.slice(1)
    }
  )
}
}






  // toggle sidebar in small devices
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }

  // toggle sidebar
  toggleSidebar() {
    let body = document.querySelector('body');
    if((!body.classList.contains('sidebar-toggle-display')) && (!body.classList.contains('sidebar-absolute'))) {
      this.iconOnlyToggled = !this.iconOnlyToggled;
      if(this.iconOnlyToggled) {
        body.classList.add('sidebar-icon-only');
      } else {
        body.classList.remove('sidebar-icon-only');
      }
    } else {
      this.sidebarToggled = !this.sidebarToggled;
      if(this.sidebarToggled) {
        body.classList.add('sidebar-hidden');
      } else {
        body.classList.remove('sidebar-hidden');
      }
    }
  }

  // toggle right sidebar
  // toggleRightSidebar() {
  //   document.querySelector('#right-sidebar').classList.toggle('open');
  // }

}
