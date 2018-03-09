import { NgModule } from '@angular/core';
// import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatButtonModule, MatCheckboxModule, MatInputModule, MatNativeDateModule, MatListModule, MatSelectModule,
  MatProgressSpinnerModule, MatCardModule
} from '@angular/material';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule,
    MatToolbarModule, BrowserAnimationsModule, MatMenuModule,
    MatGridListModule, MatSidenavModule, MatSlideToggleModule,
    MatChipsModule, MatFormFieldModule, MatDatepickerModule,
    MatNativeDateModule, MatInputModule, MatListModule,
    MatStepperModule, MatSelectModule, MatTableModule, MatProgressSpinnerModule,
    MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule,
    MatToolbarModule, BrowserAnimationsModule, MatMenuModule,
    MatGridListModule, MatSidenavModule, MatSlideToggleModule,
    MatChipsModule, MatFormFieldModule, MatDatepickerModule,
    MatNativeDateModule, MatInputModule, MatListModule,
    MatStepperModule, MatSelectModule, MatTableModule, MatProgressSpinnerModule,
    MatCardModule],
})
export class MaterialModule {
}