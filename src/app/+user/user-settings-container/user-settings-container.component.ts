import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mad-user-settings-container',
  templateUrl: './user-settings-container.component.html',
  styleUrls: ['./user-settings-container.component.scss']
})
export class UserSettingsContainerComponent implements OnInit {

  selectedAudience = 'pg13';
  audiences = [{ value: 'pg13', viewValue: 'PG-13' }, { value: 'r', viewValue: 'R' }];

  constructor() { }

  ngOnInit() {
  }

}
