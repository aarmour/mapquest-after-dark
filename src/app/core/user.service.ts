import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private auth: AngularFireAuth, private db: AngularFireDatabase) { }

  getSettings(): Observable<any> {
    const uid = this.getUid();
    return this.db.object(`/user/${uid}/settings`).take(1);
  }

  saveSettings() {

  }

  private getUid() {
    return this.auth.auth.currentUser.uid;
  }

}
