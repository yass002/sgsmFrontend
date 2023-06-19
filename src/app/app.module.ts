import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule, ThemeService } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
import {HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ClientDashComponent } from './client-dash/client-dash.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DeclarerpanneComponent } from './client-dash/pannes/declarerpanne/declarerpanne.component';
import { VoirpanneComponent } from './admin/dashboard/voirpanne/voirpanne.component';
import { DetailspanneComponent } from './admin/dashboard/detailspanne/detailspanne.component';
import { TechComponent } from './admin/tech/tech.component';
import { AjoutTechComponent } from './admin/tech/ajout-tech/ajout-tech.component';
import { AffectationComponent } from './admin/affectation/affectation.component';
import { TechesComponent } from './teches/teches.component';
import { TechTachesComponent } from './admin/tech-taches/tech-taches.component';
import { VoirmespannesComponent } from './client-dash/voirmespannes/voirmespannes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    ClientDashComponent,
    DeclarerpanneComponent,
    VoirpanneComponent,
    DetailspanneComponent,
    TechComponent,
    AjoutTechComponent,
    AffectationComponent,
    TechesComponent,
    TechTachesComponent,
    VoirmespannesComponent,
    
   
   
    
  
    
   
   
  ],
  imports: [
  
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    
    ToastrModule.forRoot(
      
    )
    
    
  ],
  providers: [
  

    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
