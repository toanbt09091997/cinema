import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MovieModel} from '../../model/movie.model';
import {ENDPOINT_URL} from '../constants/app.constains';
import {OrderModule} from '../../pages/order/order.module';
import {OrderModel} from '../../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  fetch(): Observable<OrderModel[]> {
    return this.http.get<OrderModel[]>(`${ENDPOINT_URL}/order`);
  }

  // findbyRap(id: any): Observable<MovieModel[]> {
  //   return this.http.get<MovieModel[]>(`${ENDPOINT_URL}/order/c/${id}`);
  // }

  findOne(id: any): Observable<OrderModel> {
    return this.http.get<OrderModel>(`${ENDPOINT_URL}/order/${id}`);
  }

  create(order: OrderModel): Observable<OrderModel> {
    return this.http.post<OrderModel>(`${ENDPOINT_URL}/order`, order);
  }

  update(order: OrderModel) {
    return this.http.put(`${ENDPOINT_URL}/order`, order);
  }

  delete(id: number) {
    return this.http.delete(`${ENDPOINT_URL}/order/${id}`);
  }
}
