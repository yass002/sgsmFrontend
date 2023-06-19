import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SgsmComponent } from '../sgsm/sgsm.component';
import { AddAscComponent } from '../add-asc/add-asc.component';
import { DeclarerpanneComponent } from '../pannes/declarerpanne/declarerpanne.component';
import { VoirpanneComponent } from '../../admin/dashboard/voirpanne/voirpanne.component';
import { VoirmespannesComponent } from '../voirmespannes/voirmespannes.component';

const routes: Routes = [
  { path: 'sgsm/:id', component: SgsmComponent },
  { path: 'ajouteasc/:id', component: AddAscComponent },
  {path: 'declarepanne/:id' , component: DeclarerpanneComponent},
  {path: 'voirpanne/:id' , component: VoirpanneComponent},
  {path:'voirmespannes/:id' , component:VoirmespannesComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientModuleRoutingModule { }
