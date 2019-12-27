import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule} from '@angular/material/dialog';
import { MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatIconModule} from '@angular/material/icon';
import { MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../mocks/in-memory-data.service';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatBottomSheetModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService),
    HttpClientModule
  ],
  exports: [
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule
  ],
})
export class MaterialModule { }
