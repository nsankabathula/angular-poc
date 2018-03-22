declare const require: any;
export interface IRestModel {
    method: string;
    url: string;
    body: any;
    bodyRequired: boolean;
    result: any;
}

export const REST_DATA: Array<IRestModel> = require('./rest.data.json');
// export const REST_DATA_MAP: Map<string, IRestModel> = new Map(REST_DATA);

