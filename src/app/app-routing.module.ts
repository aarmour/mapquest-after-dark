import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './+explore/explore.module#ExploreModule'
  },
  {
    path: 'friends',
    loadChildren: './+friends/friends.module#FriendsModule'
  },
  {
    path: 'go',
    loadChildren: './+go/go.module#GoModule'
  },
  {
    path: 'more',
    loadChildren: './+more/more.module#MoreModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
