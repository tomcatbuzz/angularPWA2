import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    data: { animation: 'signup'}
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { animation: 'login'}
  },
  {
    path: 'auth',
    component: AuthComponent,
    data: { animation: 'auth'}
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
