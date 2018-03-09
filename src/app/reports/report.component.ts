import { Component, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { IElementMeta, IElement, ISearch } from '../model/data.model';



@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class AppReportComponent {
    reportSearch: ISearch = { criteria: {}, data: [], isEmpty: true, meta: [] };
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
                    { name: key.toLocaleUpperCase(), removable: false, selectable: true, title: search.criteria[key] });
            }
        });

        console.log(search);
    }

    remove(filter: any, i: number): void {
        console.log('remove :', filter, i);
        const index = this.filters.indexOf(filter);

        if (index >= 0) {
            this.filters.splice(index, 1);
        }
    }
}
