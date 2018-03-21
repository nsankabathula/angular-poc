import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from '../services/rest.service';

import { IRestModel, REST_DATA } from '../model/rest.model';

@Component({
    selector: 'app-rest',
    templateUrl: './rest.component.html',
    styleUrls: ['./rest.component.css']
})
export class RestComponent {
    REST_DATA = REST_DATA;
    constructor(private restSvc: RestService) {
    }

}
