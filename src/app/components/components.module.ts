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
import { AvatarDirective } from './avatar.directive';
import { BackToolbarButtonComponent } from './back-toolbar-button/back-toolbar-button.component';
import { NotificationsToolbarButtonComponent } from './notifications-toolbar-button/notifications-toolbar-button.component';
import { PoiDetailsComponent } from './poi-details/poi-details.component';

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
    PoiDetailsComponent,
  ],
  declarations: [
    AppLayoutComponent,
    AppLayoutToolbarComponent,
    AppToolbarComponent,
    AvatarDirective,
    BackToolbarButtonComponent,
    NotificationsToolbarButtonComponent,
    PoiDetailsComponent,
  ]
})
export class ComponentsModule { }
