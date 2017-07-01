import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mad-app-layout-bottom-toolbar',
  template: '<ng-content></ng-content>'
})
export class AppLayoutBottomToolbarComponent {}

@Component({
  selector: 'mad-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
