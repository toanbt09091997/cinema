import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ENDPOINT_URL} from '../constants/app.constains';
import {ShowtimeModel} from '../../model/showtime.model';

@Injectable({
  providedIn: 'root'
})
export class ShowtimeService {

  constructor(private http: HttpClient) { }
  fetch(): Observable<ShowtimeModel[]> {
    return this.http.get<ShowtimeModel[]>(`${ENDPOINT_URL}/showtime`);
  }

  findbyMovieID(id: any): Observable<ShowtimeModel[]> {
    return this.http.get<ShowtimeModel[]>(`${ENDPOINT_URL}/showtime/fbymovie/${id}`);
  }

  findOne(id: any): Observable<ShowtimeModel> {
    return this.http.get<ShowtimeModel>(`${ENDPOINT_URL}/showtime/${id}`);
  }

  create(showtime: ShowtimeModel): Observable<ShowtimeModel> {
    return this.http.post<ShowtimeModel>(`${ENDPOINT_URL}/showtime`, showtime);
  }

  update(showtime: ShowtimeModel) {
    return this.http.put(`${ENDPOINT_URL}/showtime`, showtime);
  }

  delete(id: number) {
    return this.http.delete(`${ENDPOINT_URL}/showtime/${id}`);
  }
}
