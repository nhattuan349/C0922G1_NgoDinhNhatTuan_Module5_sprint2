import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ConfirmComponent } from './confirm/confirm.component';


@NgModule({
  declarations: [LoginComponent, ChangePasswordComponent, ConfirmComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
