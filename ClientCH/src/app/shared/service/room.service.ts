import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ENDPOINT_URL} from '../constants/app.constains';
import {RoomModel} from '../../model/room.model';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }
  fetch(): Observable<RoomModel[]> {
    return this.http.get<RoomModel[]>(`${ENDPOINT_URL}/room`);
  }

  findOne(id: any): Observable<RoomModel> {
    return this.http.get<RoomModel>(`${ENDPOINT_URL}/room/${id}`);
  }

  create(room: RoomModel): Observable<RoomModel> {
    return this.http.post<RoomModel>(`${ENDPOINT_URL}/room`, room);
  }

  update(room: RoomModel) {
    return this.http.put(`${ENDPOINT_URL}/room`, room);
  }

  delete(id: number) {
    return this.http.delete(`${ENDPOINT_URL}/room/${id}`);
  }
}
