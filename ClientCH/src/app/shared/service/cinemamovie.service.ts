import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CinemaModel} from '../../model/cinema.model';
import {ENDPOINT_URL} from '../constants/app.constains';

@Injectable({
  providedIn: 'root'
})
export class CinemamovieService {
  constructor(private http: HttpClient) { }

  fetch(): Observable<CinemaModel[]> {
    return this.http.get<CinemaModel[]>(`${ENDPOINT_URL}/cinemamovie`);
  }

  findOne(id: any): Observable<CinemaModel> {
    return this.http.get<CinemaModel>(`${ENDPOINT_URL}/cinemamovie/${id}`);
  }

  create(product: CinemaModel): Observable<CinemaModel> {
    return this.http.post<CinemaModel>(`${ENDPOINT_URL}/cinemamovie`, product);
  }

  update(product: CinemaModel) {
    return this.http.put(`${ENDPOINT_URL}/cinemamovie`, product);
  }

  delete(id: number) {
    return this.http.delete(`${ENDPOINT_URL}/cinemamovie/${id}`);
  }
}
