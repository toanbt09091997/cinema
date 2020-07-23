import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ENDPOINT_URL} from '../constants/app.constains';
import {TicketModel} from '../../model/ticket.model';
import {OrderModel} from '../../model/order.model';
import {RefundTicketModel} from '../../model/refundticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }
  fetch(): Observable<TicketModel[]> {
    return this.http.get<TicketModel[]>(`${ENDPOINT_URL}/ticket`);
  }

  findbyOrdid(id: any): Observable<TicketModel[]> {
    return this.http.get<TicketModel[]>(`${ENDPOINT_URL}/ticket/o/${id}`);
  }
  findByCinemaAndPhimAndMaghe(ticket: any): Observable<TicketModel[]>{
    return this.http.post<TicketModel[]>(`${ENDPOINT_URL}/ticket/search`,ticket);
  }

  reTicket(ticket: RefundTicketModel){
    return this.http.put(`${ENDPOINT_URL}/ticket/reticket`, ticket);
  }

  findbyShow(id: any): Observable<TicketModel[]> {
    return this.http.get<TicketModel[]>(`${ENDPOINT_URL}/ticket/s/${id}`);
  }
  findByTicket(id: any): Observable<TicketModel[]> {
    return this.http.get<TicketModel[]>(`${ENDPOINT_URL}/ticket/search/${id}`);
  }

  findOne(id: any): Observable<TicketModel> {
    return this.http.get<TicketModel>(`${ENDPOINT_URL}/ticket/${id}`);
  }

  create(ticket: TicketModel): Observable<TicketModel> {
    return this.http.post<TicketModel>(`${ENDPOINT_URL}/ticket`, ticket);
  }

  update(ticket: TicketModel) {
    return this.http.put(`${ENDPOINT_URL}/ticket`, ticket);
  }

  delete(id: number) {
    return this.http.delete(`${ENDPOINT_URL}/ticket/${id}`);
  }
}
