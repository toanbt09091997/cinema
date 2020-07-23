import {MovieModel} from './movie.model';
import {RoomModel} from './room.model';
import {ShowtimeModel} from './showtime.model';
export class CinemaModel {
  id?: number;
  marap?: string;
  tenrap?: string;
  diachi?: string;
  gioithieu?: string;
  status?: number;
  createdAt?: Date;
  updateAt?: Date;
  movies?: MovieModel[];
  roomEntities?: RoomModel[];
  showtimes?: ShowtimeModel[];
}
