import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginContainerComponent } from './login-container/login-container.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    LoginRoutingModule
  ],
  declarations: [LoginContainerComponent]
})
export class LoginModule { }
