import { Component, Inject, Input, OnInit } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mad-layer-dialog',
  templateUrl: './layer-dialog.component.html',
  styleUrls: ['./layer-dialog.component.scss']
})
export class LayerDialogComponent implements OnInit {

  constructor(@Inject(MD_DIALOG_DATA) private data: any) { }

  ngOnInit() {
  }

}
