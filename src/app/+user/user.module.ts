import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileContainerComponent } from './user-profile-container/user-profile-container.component';
import { UserSettingsContainerComponent } from './user-settings-container/user-settings-container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    UserRoutingModule
  ],
  declarations: [
    UserProfileContainerComponent,
    UserSettingsContainerComponent
  ]
})
export class UserModule { }
