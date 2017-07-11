import { Component, Inject, Input, OnInit } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { EnableLayerAction, DisableLayerAction } from '../../state/explore/actions';
import { State } from '../../state/state';

@Component({
  selector: 'mad-layer-dialog',
  templateUrl: './layer-dialog.component.html',
  styleUrls: ['./layer-dialog.component.scss']
})
export class LayerDialogComponent implements OnInit {

  constructor(@Inject(MD_DIALOG_DATA) private data: any, private store: Store<State>) { }

  ngOnInit() {
  }

  onEnableLayer(layer) {
    this.store.dispatch(new EnableLayerAction({ name: layer }));
  }

  onDisableLayer(layer) {
    this.store.dispatch(new DisableLayerAction({ name: layer }));
  }

}
