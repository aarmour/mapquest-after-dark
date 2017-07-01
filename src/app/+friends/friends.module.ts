import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsContainerComponent } from './friends-container/friends-container.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FriendsRoutingModule
  ],
  declarations: [FriendsContainerComponent]
})
export class FriendsModule { }
