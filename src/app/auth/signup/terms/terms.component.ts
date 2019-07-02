import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent {

  constructor(private bottomSheetRef: MatBottomSheetRef) { }

 closeSheet(event: MouseEvent): void {
   this.bottomSheetRef.dismiss();
  //  event.preventDefault();
 }

}
