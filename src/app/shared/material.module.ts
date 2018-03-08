import { NgModule } from '@angular/core';
// import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule,
    MatToolbarModule, BrowserAnimationsModule, MatMenuModule,
    MatGridListModule, MatSidenavModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule,
    MatToolbarModule, BrowserAnimationsModule, MatMenuModule,
    MatGridListModule, MatSidenavModule],
})
export class MaterialModule {
}