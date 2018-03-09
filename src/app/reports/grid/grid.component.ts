declare var require: any;

import { Component, ViewChild, Input, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { IElementMeta, IElement, ISearch } from '../../model/data.model';


@Component({
    selector: 'app-report-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})
export class AppReportGridComponent implements OnChanges {

    // tslint:disable-next-line:no-inferrable-types
    spinner = { show: true };

    @Input()
    source: IElement[] = [];

    meta: IElementMeta[] = require('../../data/meta.data.json');
    displayedColumns = [];

    private dataSource = new MatTableDataSource(this.source);

    constructor() {

        this.displayedColumns = this.meta.
            filter((metaInfo: IElementMeta) => {
                return metaInfo.display;
            })
            .map((metaInfo: IElementMeta) => {
                return metaInfo.name;
            });
    }

    selection = new SelectionModel<Element>(true, []);

    toggleSpinner(show: boolean) {
        this.spinner = (show !== null && show !== undefined) ? { show: show } : { show: !this.spinner.show };
    }

    ngOnChanges(changes: SimpleChanges) {
        this.toggleSpinner(true);

        setTimeout(() => {
            this.toggleSpinner(null);
            const source: SimpleChange = changes.source;
            this.dataSource = new MatTableDataSource(source.currentValue);

        }, 2000);

        /*
        const meta: SimpleChange = changes.meta;
        this.displayedColumns = [].concat(meta.currentValue.
            filter((metaInfo: IElementMeta) => {
                return metaInfo.display;
            })
            .map((metaInfo: IElementMeta) => {
                return metaInfo.name;
            }));
            */
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    /*
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }
    */
}
