import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ENDPOINT_URL} from "../constants/app.constains";

import {RefundTicketModel} from '../../model/refundticket.model';
import {SeatModel} from '../../model/seat.model';


@Injectable({
  providedIn: 'root'
})
export class RefundticketService {
  constructor(private http: HttpClient) { }
  fetch(): Observable<RefundTicketModel[]> {
    return this.http.get<RefundTicketModel[]>(`${ENDPOINT_URL}/refundTicket`);
  }

  findOne(id: any): Observable<RefundTicketModel> {
    return this.http.get<RefundTicketModel>(`${ENDPOINT_URL}/refundTicket/${id}`);
  }



  create(refundticket: RefundTicketModel): Observable<RefundTicketModel> {
    return this.http.post<RefundTicketModel>(`${ENDPOINT_URL}/refundTicket`, refundticket);
  }

  update(refundticket: RefundTicketModel) {
    return this.http.put(`${ENDPOINT_URL}/refundTicket`, refundticket);
  }

  delete(id: number) {
    return this.http.delete(`${ENDPOINT_URL}/refundTicket/${id}`);
  }
}
