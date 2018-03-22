import { NgModule } from '@angular/core';


import {
  MatButtonModule, MatCheckboxModule, MatIconModule,
  MatToolbarModule, MatMenuModule,
  MatGridListModule, MatSidenavModule, MatSlideToggleModule,
  MatChipsModule, MatFormFieldModule, MatDatepickerModule,
  MatNativeDateModule, MatInputModule, MatListModule,
  MatStepperModule, MatSelectModule, MatTableModule, MatProgressSpinnerModule,
  MatCardModule, MatTabsModule
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
    MatCardModule, MatTabsModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatIconModule,
    MatToolbarModule, MatMenuModule,
    MatGridListModule, MatSidenavModule, MatSlideToggleModule,
    MatChipsModule, MatFormFieldModule, MatDatepickerModule,
    MatNativeDateModule, MatInputModule, MatListModule,
    MatStepperModule, MatSelectModule, MatTableModule, MatProgressSpinnerModule,
    MatCardModule, MatTabsModule
  ],
})
export class MaterialModule {
}
