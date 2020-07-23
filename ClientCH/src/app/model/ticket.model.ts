import {OrderModel} from './order.model';

export class TicketModel {
    id?: number;
    createdAt?: Date;
    tenphim?: string;
    idGhe?: number;
    marap?: number;
    maphong?: number;
    giave?: number;
    status?: number;
    timeStart?: Date;
    timeEnd?: Date;
    lichchieu?: number;
    tienphat?: number;
    order?: OrderModel;
    date?: Date;
}
