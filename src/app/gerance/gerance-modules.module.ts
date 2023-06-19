import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { ConsulterClientComponent } from './consulter-client/consulter-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path :'ajoutclient' , component:AjoutClientComponent },
  { path :'consulterclient' , component:ConsulterClientComponent }
]

@NgModule({
  declarations: [AjoutClientComponent,ConsulterClientComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class GeranceModulesModule { }
