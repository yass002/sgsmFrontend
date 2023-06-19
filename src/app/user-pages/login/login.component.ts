import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import { ToastrService } from 'ngx-toastr';
import { concat } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterViewInit {

  constructor(
    private as:AdminService, 
    private formBuilder : FormBuilder ,
    private route:Router,
    private tost:ToastrService
   ) { }
  @ViewChild('em') myinput:ElementRef
  

  

  credentials = this.formBuilder.group(
    {
      email: ['',[Validators.required,Validators.email]],
      password : ['',Validators.required]
    }
  )


  ngOnInit() {
    console.log(this.as.isLoggedIn())
  }
  

  dataToken:any
  datas:any
  msg:string
  
  wrongC=false
  
  login(d:any){
    let data = d.value
    this.as.login(data).subscribe(
      res=>
      {
        this.datas=res
        this.dataToken=this.as.decodeToken(this.datas.accesToken)
        this.wrongC=false
        console.log("this dataToken : ",this.dataToken)
        
    
        this.tost.success("Authentifié avec success","Login",
        {progressBar:true , progressAnimation:'increasing',timeOut:2000}
        )

        switch(this.dataToken.Authority[0].authority){
         case 'Admin' :
          {
            this.route.navigate(['/acceuil/voirpanne'])
            break;
          }
          case 'Client' :
            {
              this.route.navigate(['/client'])
              break;
            }
        }
      },
      err=>{
        this.msg="Your credentiels are wrongs"
        this.wrongC = true
      }
      
    )
  }
  ngAfterViewInit(): void {
    this.myinput.nativeElement.focus()
  }
}
