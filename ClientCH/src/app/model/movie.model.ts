import {CinemaModel} from './cinema.model';
import {ShowtimeModel} from './showtime.model';

export class MovieModel {
  id?: number;
  maphim?: string;
  tenphim?: string;
  loaiphim?: string;
  theloai?: string;
  namsx?: number;
  image?: string;
  // trailer?: string;
  mota?: string;
  createdAt?: number;
  updateAt?: number;
  status?: number;
  marap?: number;
  cinema?: CinemaModel;
  showtime?: ShowtimeModel[];
}
