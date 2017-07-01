import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreContainerComponent } from './explore-container/explore-container.component';

const routes: Routes = [
  {
    path: '',
    component: ExploreContainerComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule { }
