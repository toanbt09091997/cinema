import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {MovieListComponent} from './movie-list/movie-list.component';
import {MovieCreateComponent} from './movie-create/movie-create.component';
import {CinemaModel} from '../../model/cinema.model';
import {Observable} from 'rxjs';
import {MovieModule} from './movie.module';
import {MovieService} from '../../shared/service/movie.service';
import {MovieModel} from '../../model/movie.model';

export class MovieResolver implements Resolve<MovieModule> {
  constructor(private movieService: MovieService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieModel>
    | Promise<MovieModel> | MovieModel {
    const id = route.params.id ? route.params.id : null;
    return this.movieService.findOne(id);
  }
}


const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: MovieCreateComponent
  },
  {
    path: 'update/:id',
    component: MovieCreateComponent,
    resolve: {
      movie: MovieResolver
    }
  },
  // {
  //   path: 'detail/:id',
  //   component: ProductCreateComponent,
  //   resolve: {
  //     product: ProductResolver
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
