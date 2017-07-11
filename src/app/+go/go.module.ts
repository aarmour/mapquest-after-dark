import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { GoRoutingModule } from './go-routing.module';
import { GoContainerComponent } from './go-container/go-container.component';
import { RideShareComponent } from './ride-share/ride-share.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    GoRoutingModule
  ],
  declarations: [GoContainerComponent, RideShareComponent]
})
export class GoModule { }
