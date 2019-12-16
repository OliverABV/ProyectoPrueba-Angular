import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatBottomSheetModule
  ],
  exports: [
    MatDialogModule,
    MatBottomSheetModule

  ]
})
export class MaterialModule { }
