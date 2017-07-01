import { Component } from '@angular/core';

@Component({
  selector: 'mad-app-layout-toolbar',
  template: '<ng-content></ng-content>'
})
export class AppLayoutToolbarComponent { }

@Component({
  selector: 'mad-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent { }
