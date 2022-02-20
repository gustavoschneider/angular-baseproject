import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular FlexLayout Import
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSliderModule,
    MatIconModule
  ],
  exports: [
    FlexLayoutModule,
    MatButtonModule,
    MatSliderModule,
    MatIconModule
  ]
})
export class UiModule { }
