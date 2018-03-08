import { NgModule } from '@angular/core';
// import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,
    MatToolbarModule, BrowserAnimationsModule, MatMenuModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, BrowserAnimationsModule, MatMenuModule],
})
export class MaterialModule {
}