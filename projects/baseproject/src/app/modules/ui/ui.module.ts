import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular FlexLayout Import
import { FlexLayoutModule } from '@angular/flex-layout';

import { ReactiveFormsModule } from '@angular/forms';

// Angular Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSliderModule,
    MatIconModule,
    MatTableModule,
    MatInputModule
  ],
  exports: [
    FlexLayoutModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSliderModule,
    MatIconModule,
    MatTableModule,
    MatInputModule
  ]
})
export class UiModule { }
