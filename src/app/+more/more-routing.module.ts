import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreContainerComponent } from './more-container/more-container.component';

const routes: Routes = [
  {
    path: '',
    component: MoreContainerComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoreRoutingModule { }
