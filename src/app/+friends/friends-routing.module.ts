import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriendsContainerComponent } from './friends-container/friends-container.component';

const routes: Routes = [
  {
    path: '',
    component: FriendsContainerComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendsRoutingModule { }
