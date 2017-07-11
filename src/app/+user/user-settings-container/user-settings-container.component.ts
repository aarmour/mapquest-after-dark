import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Store } from '@ngrx/store';

import { SetAvailableLayersAction } from '../../state/explore/actions';
import { State } from '../../state/state';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'mad-user-settings-container',
  templateUrl: './user-settings-container.component.html',
  styleUrls: ['./user-settings-container.component.scss']
})
export class UserSettingsContainerComponent implements OnDestroy, OnInit {

  @ViewChild(NgForm)
  ngForm: NgForm;

  selectedAudience = 'pg13';
  audiences = [{ value: 'pg13', viewValue: 'PG-13' }, { value: 'r', viewValue: 'R' }];

  audienceFormValueSubscription: Subscription;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.audienceFormValueSubscription = this.ngForm.valueChanges
      .subscribe((formValues) => {
        if (this.ngForm.pristine) {
          return;
        }

        this.store.dispatch(new SetAvailableLayersAction({ audience: formValues.audience }));
      });
  }

  ngOnDestroy() {
    this.audienceFormValueSubscription.unsubscribe();
  }

}
