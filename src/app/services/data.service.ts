import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const FILTER_DATA = {
    eventTypes: [
        { name: 'Execution Report Ack', value: 'exec_rpt_ack' },
        { name: 'Execution Report New Order', value: 'exec_rpt_new_order' },
        { name: 'New Order', value: 'new_order' },
        { name: 'Modify Order', value: 'modify_order' },
    ],
    orderTypes: [
        { name: 'Market', value: 'market' },
        { name: 'Market Limit', value: 'market_limit' },
        { name: 'Stop', value: 'stop' }
    ],
    side: [
        { name: 'B', value: 'B' },
        { name: 'S', value: 'S' },
        { name: 'SS', value: 'SS' }
    ],
    venue: [
        { name: 'CME', value: 'CME' },
        { name: 'NYMEX', value: 'NYMEX' },
        { name: 'CBoT', value: 'CBoT' },
        { name: 'CBoE', value: 'CBoE' },
        { name: 'ICE', value: 'ICE' },
    ],
};

@Injectable()
export class DataService {
    getFilterData(): Observable<any> {
        return Observable.of(FILTER_DATA);
    }
}