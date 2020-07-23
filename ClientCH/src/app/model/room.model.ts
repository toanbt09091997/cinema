import {SeatModel} from './seat.model';

export class RoomModel {
  id?: number;
  createdAt?: Date;
  updateAt?: Date;
  maphong?: number;
  status?: number;
  gheEntities?: SeatModel[];
}
