import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path: 'explore',
    loadChildren: './+explore/explore.module#ExploreModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'friends',
    loadChildren: './+friends/friends.module#FriendsModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'go',
    loadChildren: './+go/go.module#GoModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: './+login/login.module#LoginModule'
  },
  {
    path: 'more',
    loadChildren: './+more/more.module#MoreModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'notifications',
    loadChildren: './+notifications/notifications.module#NotificationsModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: './+user/user.module#UserModule',
    canLoad: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'explore',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
