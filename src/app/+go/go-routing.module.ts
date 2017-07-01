import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoContainerComponent } from './go-container/go-container.component';

const routes: Routes = [
  {
    path: '',
    component: GoContainerComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoRoutingModule { }
