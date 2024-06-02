import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartyListComponent } from './party-list/party-list.component';
import { PartyManagementSystemRoutingModule } from './party-management-system-routing.module';
import { MaterialModule } from '../material.module';
import { ViewPartyComponent } from './view-party/view-party.component';
import { EditPartyComponent } from './edit-party/edit-party.component';
import { AddNewPartyComponent } from './add-new-party/add-new-party.component';




@NgModule({
  declarations: [
    PartyListComponent,
    ViewPartyComponent,
    EditPartyComponent,
    AddNewPartyComponent,
    
  ],
  imports: [
    MaterialModule,
    PartyManagementSystemRoutingModule,
    CommonModule
  ]
})
export class PartyManagementSystemModule { }
