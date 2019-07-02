import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { UploaderComponent } from './uploader/uploader.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
    data: { animation: 'home'}
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(mod => mod.AboutModule),
    data: { animation: 'about'}
  },
  {
    path: 'uploader',
    component: UploaderComponent,
    data: { animation: 'photo-share'},
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(mod => mod.ContactModule),
    data: { animation: 'contact'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
