import { Component, ViewChild, Input, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';



@Component({
    selector: 'app-report-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})
export class AppReportGridComponent implements OnChanges {

    displayedColumns = ['position', 'name', 'weight', 'symbol'];

    @Input()
    source = [];

    private dataSource = new MatTableDataSource(this.source);

    selection = new SelectionModel<Element>(true, []);

    ngOnChanges(changes: SimpleChanges) {
        const source: SimpleChange = changes.source;
        this.dataSource = new MatTableDataSource(source.currentValue);
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
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }
}
