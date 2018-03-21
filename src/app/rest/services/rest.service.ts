import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

import { ConfigService } from 'shared/services/config.service';
import { IConfig } from 'shared/model/config.model';

import { IRestModel } from '../model/rest.model';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
};

@Injectable()
export class RestService {
    CONFIG: IConfig;
    constructor(private http: HttpClient, private confSvc: ConfigService) {
        this.CONFIG = confSvc.config();
    }

    call(model: IRestModel): Observable<any> {
        model.url = this.CONFIG.baseUrl + model.url;
        switch (model.method.toLocaleUpperCase()) {
            case 'GET':
                return this.get(model.url);
            case 'POST':
                return this.post(model.url, model.body);
            case 'PUT':
                return this.put(model.url, model.body);
            case 'DELETE':
                return this.delete(model.url);
            default:
                throw new ErrorObservable(
                    JSON.stringify(model) + ' mapping not available.');
        }
    }

    get(url): Observable<any> {
        return this.http.get(url)
            .pipe(
            catchError(this.handleError)
            );
    }

    post(url, body): Observable<any> {
        return this.http.post(url, body)
            .pipe(
            catchError(this.handleError)
            );
    }

    delete(url): Observable<any> {
        return this.http.delete(url).pipe(
            catchError(this.handleError)
        );
    }

    put(url, body): Observable<any> {
        return this.http.put(url, body)
            .pipe(
            catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an ErrorObservable with a user-facing error message
        return new ErrorObservable(
            'Something bad happened; please try again later.');
    }
}
