import { Component, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import { HidePoiDetailsAction } from '../../state/explore/actions';
import { State } from '../../state/state';

@Component({
  selector: 'mad-poi-details-snack-bar',
  templateUrl: './poi-details-snack-bar.component.html',
  styleUrls: ['./poi-details-snack-bar.component.scss']
})
export class PoiDetailsSnackBarComponent {

  @Input() name: string;

  constructor(private store: Store<State>) { }

  onDismiss() {
    this.store.dispatch(new HidePoiDetailsAction());
  }

}
