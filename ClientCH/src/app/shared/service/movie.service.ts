import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoomModel} from '../../model/room.model';
import {ENDPOINT_URL} from '../constants/app.constains';
import {MovieModel} from '../../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  fetch(): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>(`${ENDPOINT_URL}/movie`);
  }

  findbyRap(id: any): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>(`${ENDPOINT_URL}/movie/c/${id}`);
  }

  findOne(id: any): Observable<MovieModel> {
    return this.http.get<MovieModel>(`${ENDPOINT_URL}/movie/${id}`);
  }

  create(room: MovieModel): Observable<MovieModel> {
    return this.http.post<MovieModel>(`${ENDPOINT_URL}/movie`, room);
  }

  update(room: MovieModel) {
    return this.http.put(`${ENDPOINT_URL}/movie`, room);
  }

  delete(id: number) {
    return this.http.delete(`${ENDPOINT_URL}/movie/${id}`);
  }
}
