import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mad-layer-selection-menu',
  templateUrl: './layer-selection-menu.component.html',
  styleUrls: ['./layer-selection-menu.component.scss']
})
export class LayerSelectionMenuComponent implements OnInit {

  @Input() buttons;

  constructor() { }

  ngOnInit() {
  }

}
