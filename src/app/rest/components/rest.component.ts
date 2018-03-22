import { Component, ViewChild } from '@angular/core';
import { RestService } from '../services/rest.service';

import { IRestModel, REST_DATA } from '../model/rest.model';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material';

@Component({
    selector: 'app-rest',
    templateUrl: './rest.component.html',
    styleUrls: ['./rest.component.css']
})
export class RestComponent {
    REST_DATA = REST_DATA;
    restFormGroup: FormGroup;
    restModel: IRestModel;
    currentDataIndex: number;

    constructor(private restSvc: RestService, private fb: FormBuilder) {
        this.createForm(0);
    }

    makeRequest(requestInfo: IRestModel) {
        const formModel = this.restFormGroup.value;

        this.restModel.body = formModel.body,

            // console.log(JSON.parse(this.restModel.body));

            this.restSvc.call(JSON.parse(JSON.stringify(this.restModel))).subscribe(
                (success) => {
                    // console.log(success);
                    this.restModel.result = JSON.stringify(success);
                },
                (error) => {
                    console.error(error);
                });
    }

    createForm(index: number) {
        this.currentDataIndex = index;
        this.restModel = REST_DATA[this.currentDataIndex];
        this.restFormGroup = this.fb.group({
            url: [this.restModel.url, Validators.required],
            body: [this.restModel.body, this.restModel.bodyRequired ? Validators.required : null]
        });
        // console.log(this.restFormGroup);
    }

    tabChanged(event: MatTabChangeEvent) {
        // console.log('tabChanged', event);
        this.createForm(event.index);

    }



}
