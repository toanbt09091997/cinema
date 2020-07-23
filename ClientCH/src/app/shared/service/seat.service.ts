import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SeatModel} from '../../model/seat.model';
import {Observable} from 'rxjs';
import {ENDPOINT_URL} from '../constants/app.constains';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  constructor(private http: HttpClient) { }
  fetch(): Observable<SeatModel[]> {
    return this.http.get<SeatModel[]>(`${ENDPOINT_URL}/seat`);
  }

  findbyRoom(id: any): Observable<SeatModel[]> {
    return this.http.get<SeatModel[]>(`${ENDPOINT_URL}/seat/r/${id}`);
  }

  findOne(id: any): Observable<SeatModel> {
    return this.http.get<SeatModel>(`${ENDPOINT_URL}/seat/${id}`);
  }

  create(seat: SeatModel): Observable<SeatModel> {
    return this.http.post<SeatModel>(`${ENDPOINT_URL}/seat`, seat);
  }
  findByLoaigheAndTenghe(name: any){
    return this.http.post<any>(`${ENDPOINT_URL}/seat/search`,name)
  }

  update(seat: SeatModel) {
    return this.http.put(`${ENDPOINT_URL}/seat`, seat);
  }

  delete(id: number) {
    return this.http.delete(`${ENDPOINT_URL}/seat/${id}`);
  }
}
