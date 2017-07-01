import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoRoutingModule } from './go-routing.module';
import { GoContainerComponent } from './go-container/go-container.component';

@NgModule({
  imports: [
    CommonModule,
    GoRoutingModule
  ],
  declarations: [GoContainerComponent]
})
export class GoModule { }
