import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdInputModule,
  MdMenuModule,
  MdNativeDateModule,
  MdProgressSpinnerModule,
  MdSelectModule,
  MdSnackBarModule,
  MdToolbarModule
} from '@angular/material';

import { AppLayoutComponent } from './app-layout/app-layout.component';

const mdModules = [
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdDatepickerModule,
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
    ...mdModules
  ],
  exports: [
    ...mdModules,
    AppLayoutComponent
  ],
  declarations: [AppLayoutComponent]
})
export class ComponentsModule { }
