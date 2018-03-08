import { NgModule } from '@angular/core';
// import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule,
    MatToolbarModule, BrowserAnimationsModule, MatMenuModule,
    MatGridListModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule,
    MatToolbarModule, BrowserAnimationsModule, MatMenuModule,
    MatGridListModule],
})
export class MaterialModule {
}