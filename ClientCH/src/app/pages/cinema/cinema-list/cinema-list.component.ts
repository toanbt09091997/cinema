import { Component, OnInit } from '@angular/core';
import {CinemaModel} from '../../../model/cinema.model';
import {CinemaService} from '../../../shared/service/cinema.service';
import {EventManagement} from '../../../shared/service/event.management';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CinemaDeleteComponent} from '../cinema-delete/cinema-delete.component';
import {PageEvent} from '@angular/material';


@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.css']
})
export class CinemaListComponent implements OnInit {
  totalElements: number = 0;
  loading: boolean;
  cinemas: CinemaModel[] = [];

  constructor(private cinemaService: CinemaService, private eventManagement: EventManagement,
              public modal: NgbModal) { }

  ngOnInit(): void {
    this.getTodos({ page: 0, size: 2 });
    this.loadCinemas();
    this.eventManagement.subscribe('UPDATE_CINEMA', () => this.loadCinemas());
  }

  private getTodos(p: { size: number; page: number }) {
    this.loading = true;
    this.cinemaService.fetch()
      .subscribe(data => {
        this.cinemas = data['content'];
        this.totalElements = data['totalElements'];
        this.loading = false;
      }, error => {
        this.loading = false;
      });
  }

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.getTodos({page: 0, size: 2});
  }

  loadCinemas() {
    this.cinemaService.fetch().subscribe(cinemas => {
      this.cinemas = cinemas;
    }, error => console.log(error));
  }
  goToDelete(cinema: CinemaModel) {
    const modalRef = this.modal.open(CinemaDeleteComponent);
    modalRef.componentInstance.cinema = cinema;
  }

}
