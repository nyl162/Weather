
import { NgModule } from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input"
import {MatButtonModule} from "@angular/material/button"
import {MatCardModule} from "@angular/material/card"
import {MatRadioModule} from "@angular/material/radio"
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule} from '@angular/material-moment-adapter';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatIconModule } from "@angular/material";
import {MatSliderModule} from '@angular/material/slider';

import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';

let MODULES = [
    MatToolbarModule,MatFormFieldModule,MatInputModule,
    MatButtonModule,MatCardModule,MatRadioModule,
    MatDatepickerModule,
    MatMomentDateModule,FlexLayoutModule,
    MatIconModule, MatSliderModule,
    HttpClientModule,
    MatListModule,
    MatGridListModule
  ];

@NgModule({
    imports: MODULES,
    
    exports: MODULES,
  })

  export class MatModule {}