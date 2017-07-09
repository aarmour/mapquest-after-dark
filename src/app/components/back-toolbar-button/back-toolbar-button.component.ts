import { Component, Input } from '@angular/core';

@Component({
  selector: 'mad-back-toolbar-button',
  templateUrl: './back-toolbar-button.component.html',
  styleUrls: ['./back-toolbar-button.component.scss']
})
export class BackToolbarButtonComponent {

  @Input() link = '/';
  @Input() text = 'Back';

  constructor() { }

}
