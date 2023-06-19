import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientModuleRoutingModule } from './client-module-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SgsmComponent } from '../sgsm/sgsm.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddAscComponent } from '../add-asc/add-asc.component';


@NgModule({
  declarations: [SgsmComponent, AddAscComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ClientModuleRoutingModule,

    Ng2SearchPipeModule

  ]
})
export class ClientModuleModule { }
