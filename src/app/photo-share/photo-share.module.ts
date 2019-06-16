import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PhotoShareComponent } from './photo-share.component';

@NgModule({
  declarations: [PhotoShareComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PhotoShareComponent }])
  ]
})
export class PhotoShareModule { }
