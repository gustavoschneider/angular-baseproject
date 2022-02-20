import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular FlexLayout Import
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSliderModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    FlexLayoutModule,
    MatButtonModule,
    MatSliderModule,
    MatIconModule,
    MatTableModule
  ]
})
export class UiModule { }
