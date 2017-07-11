import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mad-layer-selection-menu',
  templateUrl: './layer-selection-menu.component.html',
  styleUrls: ['./layer-selection-menu.component.scss']
})
export class LayerSelectionMenuComponent implements OnInit {

  @Input() buttons;
  @Output() enableLayer: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick(layer) {
    this.enableLayer.emit(layer);
  }

}
