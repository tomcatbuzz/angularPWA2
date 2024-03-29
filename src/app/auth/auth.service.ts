import { AuthData } from './auth-data.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { UIService } from '../shared/ui.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import * as UI from '../shared/ui.actions';
import * as Auth from './auth.actions';


@Injectable()
export class AuthService {

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private uiService: UIService,
    private store: Store<{ui: fromRoot.State}>
    ) {}

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.store.dispatch(new Auth.SetAuthenticated());
        this.router.navigate(['/uploader']);
      } else {
        this.store.dispatch(new Auth.SetUnauthenticated());
        this.router.navigate(['/login']);
      }
    });
  }

  registerUser(authData: AuthData) {
    this.store.dispatch(new UI.StartLoading);
    this.afAuth.auth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
      ).then(result => {
        this.store.dispatch(new UI.StopLoading);
      })
      .catch(error => {
        this.store.dispatch(new UI.StopLoading);
        this.uiService.showSnackbar(error.message, null, 5000);
      });
  }

  login(authData: AuthData) {
    this.store.dispatch(new UI.StartLoading);
    this.afAuth.auth.signInWithEmailAndPassword(
      authData.email,
      authData.password)
      .then(result => {
        this.store.dispatch(new UI.StopLoading);
      })
      .catch(error => {
        this.store.dispatch(new UI.StopLoading);
        this.uiService.showSnackbar(error.message, null, 5000);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
