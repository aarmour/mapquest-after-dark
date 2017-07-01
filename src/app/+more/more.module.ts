import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../components/components.module';

import { MoreRoutingModule } from './more-routing.module';
import { MoreContainerComponent } from './more-container/more-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    MoreRoutingModule
  ],
  declarations: [MoreContainerComponent]
})
export class MoreModule { }
