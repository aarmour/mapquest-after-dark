import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { LayerDialogComponent } from '../layer-dialog/layer-dialog.component';

@Component({
  selector: 'mad-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss']
})
export class ExploreContainerComponent implements OnInit {

  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  openLayersDialog() {
    this.dialog.open(LayerDialogComponent);
  }

}
