import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { BasicScrollComponent } from '../basic-scroll/basic-scroll.component';
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollComponent } from '../infinite-scroll/infinite-scroll.component';
import { SeedComponent } from '../seed/seed.component';

@NgModule({
  declarations: [HomeComponent, BasicScrollComponent, InfiniteScrollComponent, SeedComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }])
  ],
  entryComponents: [ BasicScrollComponent, InfiniteScrollComponent, SeedComponent]
})
export class HomeModule { }
