import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
declare const require: any;
import { IConfig } from '../model/config.model';



@Injectable()
export class ConfigService {
    CONFIG: IConfig = require('../model/config.data.json');
    constructor() {

    }

    config(): IConfig {
        return this.CONFIG;
    }



}
