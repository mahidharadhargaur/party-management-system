import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    AuthenticationRoutingModule,
    CommonModule,
    MaterialModule
  ]
})
export class AuthenticationModule { }
