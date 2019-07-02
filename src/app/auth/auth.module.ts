import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth/auth.component';
import { TermsComponent } from './signup/terms/terms.component';
import { SpinnerComponent } from '../spinner/spinner.component';

@NgModule({
  declarations: [SignupComponent,
    LoginComponent, AuthComponent, TermsComponent, SpinnerComponent],
  imports: [
    ReactiveFormsModule,
    AngularFireAuthModule,
    AuthRoutingModule,
    SharedModule
  ],
  entryComponents: [TermsComponent]
})
export class AuthModule {}
