import { NgModule } from '@angular/core';


import {
  MatButtonModule, MatCheckboxModule, MatIconModule,
  MatToolbarModule, MatMenuModule,
  MatGridListModule, MatSidenavModule, MatSlideToggleModule,
  MatChipsModule, MatFormFieldModule, MatDatepickerModule,
  MatNativeDateModule, MatInputModule, MatListModule,
  MatStepperModule, MatSelectModule, MatTableModule, MatProgressSpinnerModule,
  MatCardModule
} from '@angular/material';


import { CdkTableModule } from '@angular/cdk/table';


@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatIconModule,
    MatToolbarModule, MatMenuModule,
    MatGridListModule, MatSidenavModule, MatSlideToggleModule,
    MatChipsModule, MatFormFieldModule, MatDatepickerModule,
    MatNativeDateModule, MatInputModule, MatListModule,
    MatStepperModule, MatSelectModule, MatTableModule, MatProgressSpinnerModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatIconModule,
    MatToolbarModule, MatMenuModule,
    MatGridListModule, MatSidenavModule, MatSlideToggleModule,
    MatChipsModule, MatFormFieldModule, MatDatepickerModule,
    MatNativeDateModule, MatInputModule, MatListModule,
    MatStepperModule, MatSelectModule, MatTableModule, MatProgressSpinnerModule,
    MatCardModule
  ],
})
export class MaterialModule {
}
