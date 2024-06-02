import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    // redirectTo: '/auth',
    // pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import(
        '../app/party-management-system/party-management-system.module'
      ).then((m) => m.PartyManagementSystemModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
