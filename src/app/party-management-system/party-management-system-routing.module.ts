import { Route, RouterModule, Routes } from '@angular/router';
import { PartyListComponent } from './party-list/party-list.component';
import { AuthGuard } from '../guards/auth.guard';
import { NgModule } from '@angular/core';
import { ViewPartyComponent } from './view-party/view-party.component';
import { EditPartyComponent } from './edit-party/edit-party.component';
import { AddNewPartyComponent } from './add-new-party/add-new-party.component';

export const routes: Routes = [
  {
    path: '',
    component: PartyListComponent,
  },
  {
    path: 'add',
    component: AddNewPartyComponent,
  },
  {
    path: 'view/:id',
    component: ViewPartyComponent,
  },
  {
    path: 'edit/:id',
    component: EditPartyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartyManagementSystemRoutingModule {}
