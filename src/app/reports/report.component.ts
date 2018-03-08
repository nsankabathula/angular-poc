import { Component, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ISearch } from './filters/filters.component';



@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class AppReportComponent {
    reportSearch: ISearch = { criteria: {}, data: [], isEmpty: true };
    filters = [
        /*{ name: 'Reporting Events', removable: true },
        { name: 'Order Type', removable: false },
        { name: 'Side', removable: true },
        */
    ];
    constructor() {
    }

    filterChanged(search: ISearch) {
        this.reportSearch = JSON.parse(JSON.stringify(search));
        this.filters = [];
        Object.keys(search.criteria).forEach((key) => {
            if (search.criteria[key] !== null) {
                this.filters.push(
                    { name: key.toLocaleUpperCase(), removable: true });
            }
        });

        console.log(search);
    }
}
