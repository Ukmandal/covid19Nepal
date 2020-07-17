export class NepalData {
    tested_positive: number;
    tested_negative: number;
    tested_total: number;
    in_isolation: number;
    quarantined: number;
    tested_rdt: number;
    pending_result:number;
    recovered: number;
    deaths: number;
    source: string;
    updated_at: string;
}

export class latest_sit_report extends NepalData {
    type: string;
    _id: string;
    no: number;
    date: string;
    url: string;
    created_at: string;
    updated_at: string;
    __v: number;
}