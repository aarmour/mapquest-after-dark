import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileContainerComponent } from './user-profile-container/user-profile-container.component';
import { UserSettingsContainerComponent } from './user-settings-container/user-settings-container.component';

const routes: Routes = [
  {
    path: 'profile',
    component: UserProfileContainerComponent,
    pathMatch: 'full'
  },
  {
    path: 'settings',
    component: UserSettingsContainerComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
