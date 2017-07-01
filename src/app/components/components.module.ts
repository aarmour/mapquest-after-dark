import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdIconModule,
  MdInputModule,
  MdMenuModule,
  MdNativeDateModule,
  MdProgressSpinnerModule,
  MdSelectModule,
  MdSnackBarModule,
  MdToolbarModule
} from '@angular/material';

import { AppLayoutComponent, AppLayoutBottomToolbarComponent } from './app-layout/app-layout.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';

const mdModules = [
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdIconModule,
  MdInputModule,
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
    AppLayoutBottomToolbarComponent,
    AppToolbarComponent
  ],
  declarations: [
    AppLayoutComponent,
    AppLayoutBottomToolbarComponent,
    AppToolbarComponent
  ]
})
export class ComponentsModule { }
