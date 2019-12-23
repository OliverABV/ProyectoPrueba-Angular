import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule} from '@angular/material/dialog';
import { MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatIconModule} from '@angular/material/icon';
import { MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../mocks/in-memory-data.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatBottomSheetModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatIconModule,
    MatTooltipModule,
    MatDialogModule
  ],
})
export class MaterialModule { }
