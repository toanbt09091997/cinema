import {MovieModel} from './movie.model';
import {RoomModel} from './room.model';

export class ShowtimeModel {
  id?: number;
  createdAt?: Date;
  updateAt?: Date;
  dateStart?: Date;
  price?: number;
  dateEnd?: Date;
  timeStart?: string;
  status?: number;
  movie?: MovieModel;
  roomEntity?: RoomModel;
}
