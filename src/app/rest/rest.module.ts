import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestRoutingModule } from './rest.routes';
import { RestComponent } from './components/rest.component';
import { RestService } from './services/rest.service';
import { MaterialModule } from '@shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    imports: [CommonModule, RestRoutingModule, MaterialModule, FormsModule, ReactiveFormsModule],
    exports: [RestComponent],
    // schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [RestService],
    declarations: [
        RestComponent
    ]
})
export class RestModule {
}
