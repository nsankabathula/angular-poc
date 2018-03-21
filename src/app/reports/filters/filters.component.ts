declare var require: any;

import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

import { DataService } from '../../services/data.service';
import { Subject } from 'rxjs/Subject';
import { IElementMeta, IElement, ISearch } from '../../model/data.model';



const ELEMENT_META: IElementMeta[] = require('../../data/meta.data.json');


const ELEMENT_DATA: IElement[] = require('../../data/element.data.json');

const WEEKDAY_FILTER = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
};

@Component({
    selector: 'app-report-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css']
})
export class AppFilterComponent {
    isLinear = true;
    searchForm: FormGroup;
    weekDayFilter = WEEKDAY_FILTER;
    maxStartDate: Date = new Date();
    maxEndDate: Date = new Date();
    minEndDate: Date = new Date();
    @Output()
    searchCriteriaChanged: EventEmitter<ISearch> = new EventEmitter<ISearch>();

    data: any = null;
    eventtypes = new FormControl();



    constructor(private dataService: DataService, private fb: FormBuilder) {


        this.createForm();
        dataService.getFilterData().subscribe(
            (res) => {
                this.data = res;
            },
            (err: any) => {

            },
            () => {

            }
        );
    }

    createForm() {
        this.searchForm = this.fb.group({
            startDate: [{ value: null }, Validators.required], // <--- the FormControl called "name"
            endDate: [{ value: null }, Validators.required],
            client: [null, Validators.maxLength(10)],
            venue: [null, Validators.maxLength(10)],
            symbol: [null, Validators.maxLength(10)],
            trader: [null, Validators.maxLength(10)],
            eventType: [[], Validators.required]
        }, { validator: this.dateLessThan('startDate', 'endDate') });
    }

    private onDoneClick($event) {
        console.log(this.searchForm);
        this.searchCriteriaChanged.emit(<ISearch>{
            criteria: this.searchForm.value, data: ELEMENT_DATA, isEmpty: false,
            meta: ELEMENT_META
        });
    }

    private resetForm() {
        this.searchForm.reset();
        this.searchCriteriaChanged.emit(<ISearch>{ criteria: {}, data: ELEMENT_DATA, isEmpty: true, meta: ELEMENT_META });
    }

    private dateLessThan(from: string, to: string) {
        return (group: FormGroup): { [key: string]: any } => {
            const f = group.controls[from];
            const t = group.controls[to];
            if (f.value > t.value) {
                return {
                    dates: 'Date from should be less than Date to'
                };
            }
            return {};
        };
    }

    startDateChange(type: string, event: MatDatepickerInputEvent<Date>) {
        console.log(type, event);
        this.minEndDate = event.value;
    }

}
