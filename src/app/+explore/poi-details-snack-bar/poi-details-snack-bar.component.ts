import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mad-poi-details-snack-bar',
  templateUrl: './poi-details-snack-bar.component.html',
  styleUrls: ['./poi-details-snack-bar.component.scss']
})
export class PoiDetailsSnackBarComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
