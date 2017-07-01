import { Component, Input } from '@angular/core';

@Component({
  selector: 'mad-notifications-toolbar-button',
  templateUrl: './notifications-toolbar-button.component.html',
  styleUrls: ['./notifications-toolbar-button.component.scss']
})
export class NotificationsToolbarButtonComponent {

  @Input() hasNotifications: boolean;

  constructor() { }

}
