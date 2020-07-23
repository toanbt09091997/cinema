import { Component, OnInit } from '@angular/core';
import {CinemaModel} from '../../../model/cinema.model';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {EventManagement} from '../../../shared/service/event.management';
import {CinemaService} from '../../../shared/service/cinema.service';
import {MovieModel} from '../../../model/movie.model';
import {MovieService} from '../../../shared/service/movie.service';

@Component({
  selector: 'app-cinema-delete',
  templateUrl: './cinema-delete.component.html',
  styleUrls: ['./cinema-delete.component.css']
})
export class CinemaDeleteComponent implements OnInit {

  movie: MovieModel;
  constructor(public modal: NgbActiveModal,
              private cinemaService: CinemaService,
              private eventManagement: EventManagement) { }

  ngOnInit(): void {
  }

  delete() {
    this.cinemaService.delete(this.movie.id).subscribe(
      () => {
        this.eventManagement.broadcast('UPDATE_CINEMA');
        this.modal.close();
      }, error => console.log(error)
    );
  }
}
