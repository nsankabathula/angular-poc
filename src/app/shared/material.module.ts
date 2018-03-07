import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule],
})
export class MaterialModule {
}