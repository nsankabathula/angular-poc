import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { ConfigService } from './services/config.service';
import { MaterialModule } from '@shared/material.module';


@NgModule({
    declarations: [],
    imports: [HttpClientModule, MaterialModule],
    exports: [HttpClientModule, MaterialModule],
    providers: [ConfigService]
})
export class SharedModule {
}
