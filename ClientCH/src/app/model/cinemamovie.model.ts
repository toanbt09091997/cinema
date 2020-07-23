import {CinemaModel} from './cinema.model';
import {ShowtimeModel} from './showtime.model';
import {MovieModel} from './movie.model';

export class CinemamovieModel {
  id?: number;
  movie_maphim?: number;
  createdAt?: number;
  updateAt?: number;
  cinema_marap?: number;
  cinema?: CinemaModel;
  movie?: MovieModel;
}
