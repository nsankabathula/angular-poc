import { Component, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class AppReportComponent {
    filters = [
        { name: 'Reporting Events', removable: true },
        { name: 'Order Type', removable: false },
        { name: 'Side', removable: true },
    ];
    constructor() {
    }
}
