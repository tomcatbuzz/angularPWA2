import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AuthService } from '../auth/auth.service';
import * as fromRoot from '../app.reducer';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    isAuth$: Observable<boolean>;

    otherTheme = false;

    switchTheme() {
      this.otherTheme = !this.otherTheme;
    }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<fromRoot.State>,
    private authService: AuthService
    ) {}

    ngOnInit() {
      this.isAuth$ = this.store.select(fromRoot.getIsAuth);
    }

    onLogout() {
      this.authService.logout();
    }
}
