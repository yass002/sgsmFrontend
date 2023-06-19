import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { GuardadminGuard } from './guards/guardadmin.guard';
import { ClientDashComponent } from './client-dash/client-dash.component';
import { VoirpanneComponent } from './admin/dashboard/voirpanne/voirpanne.component';
import { DetailspanneComponent } from './admin/dashboard/detailspanne/detailspanne.component';
import { TechComponent } from './admin/tech/tech.component';
import { AjoutTechComponent } from './admin/tech/ajout-tech/ajout-tech.component';
import { AffectationComponent } from './admin/affectation/affectation.component';
import { TechesComponent } from './teches/teches.component';
import { TechTachesComponent } from './admin/tech-taches/tech-taches.component';


const routes: Routes = [
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' },
  { path: 'acceuil', component: DashboardComponent, canActivate:[GuardadminGuard]  ,children:[
    {path:'consultertech' , component:TechComponent},
    {path:'ajouttech' , component:AjoutTechComponent},
    {path:'voirpanne' , component: VoirpanneComponent},
    {path:'affecter',component:AffectationComponent},
    {path:'techtache/:id',component:TechTachesComponent},
    {path:'detailpanne/:id' , component:DetailspanneComponent},
    
  { path: 'gerance', loadChildren: () => import('./gerance/gerance-modules.module').then(m => m.GeranceModulesModule) },
  ]},

  {path:'tache/:id', component:TechesComponent},
  
  { path: 'client',component: ClientDashComponent, loadChildren: () => import('./client-dash/client-module/client-module.module').then(m => m.ClientModuleModule)},

  { path: 'user-pages', loadChildren: () => import('./user-pages/user-pages.module').then(m => m.UserPagesModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
