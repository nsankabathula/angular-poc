
export interface ISearch {
    criteria: any;
    data: IElement[];
    isEmpty: boolean;
    meta: IElementMeta[];
}

export interface IElement {
    index: number;
    clientAcctNo: string;
    execFirmId: string;
    parentOrdId: string;
    customerRole: string;
    cmeId: string;
    orderId: string;
    legId: string;
    instrument: string;
    cioRdId: string;
    side: string;
    qty: number;
    limitPx: string;
    lastPx: number;
    topPx: number;
    ordType: string;
    ifm: string;
    displayQty: string;
    minQty: string;
    countryCode: string;
    execPx: number;
    execQty: number;
    cumQty: number;
    qtyLeft: number;
    qtyRemain: number;
    aggFlag: string;
    rejectCode: string;
    cancelSource: string;
    processedQuotes: string;
    crossId: string;
    rfqId: string;
    messageQuoteId: string;
    quoteEntryId: string;
    bidPx: number;
    bidQty: number;
    offerPx: number;
    offerQty: number;
}

export interface IElementMeta {
    name: string;
    displayName: string;
    display: boolean;
}
