import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdProgressSpinnerModule,
  MdSelectModule,
  MdSnackBarModule,
  MdToolbarModule
} from '@angular/material';

import { AppLayoutComponent, AppLayoutToolbarComponent } from './app-layout/app-layout.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { BackToolbarButtonComponent } from './back-toolbar-button/back-toolbar-button.component';
import { NotificationsToolbarButtonComponent } from './notifications-toolbar-button/notifications-toolbar-button.component';
import { AvatarDirective } from './avatar.directive';

const mdModules = [
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdProgressSpinnerModule,
  MdSelectModule,
  MdSnackBarModule,
  MdToolbarModule
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ...mdModules
  ],
  exports: [
    ...mdModules,
    AppLayoutComponent,
    AppLayoutToolbarComponent,
    AppToolbarComponent,
    AvatarDirective,
    BackToolbarButtonComponent,
    NotificationsToolbarButtonComponent,
  ],
  declarations: [
    AppLayoutComponent,
    AppLayoutToolbarComponent,
    AppToolbarComponent,
    AvatarDirective,
    BackToolbarButtonComponent,
    NotificationsToolbarButtonComponent,
  ]
})
export class ComponentsModule { }
