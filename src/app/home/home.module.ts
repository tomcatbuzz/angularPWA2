import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { BasicScrollComponent } from '../basic-scroll/basic-scroll.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HomeComponent, BasicScrollComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }])
  ],
  entryComponents: [ BasicScrollComponent]
})
export class HomeModule { }
