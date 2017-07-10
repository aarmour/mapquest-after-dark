import { Component, Input } from '@angular/core';

@Component({
  selector: 'mad-poi-details',
  templateUrl: './poi-details.component.html',
  styleUrls: ['./poi-details.component.scss']
})
export class PoiDetailsComponent {

  @Input() name: string;

  constructor() { }

}
