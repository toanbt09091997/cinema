import { Component, OnInit } from '@angular/core';
import {EventManagement} from '../../../shared/service/event.management';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ShowtimeModel} from '../../../model/showtime.model';
import {ShowtimeService} from '../../../shared/service/showtime.service';
import {ShowtimeDeleteComponent} from '../showtime-delete/showtime-delete.component';

@Component({
  selector: 'app-showtime-list',
  templateUrl: './showtime-list.component.html',
  styleUrls: ['./showtime-list.component.css']
})
export class ShowtimeListComponent implements OnInit {
  showtimes: ShowtimeModel[] = [];
  constructor(private showtimeService: ShowtimeService,
              private eventManagement: EventManagement,
              public modal: NgbModal) { }

  ngOnInit(): void {
    this.loadShowtimes();
    this.eventManagement.subscribe('UPDATE_SHOWTIME', () => this.loadShowtimes());
  }
  loadShowtimes() {
    this.showtimeService.fetch().subscribe(showtime => {
      this.showtimes = showtime;
    }, error => console.log(error));
  }

  goToDelete(showtime: ShowtimeModel) {
    const modalRef = this.modal.open(ShowtimeDeleteComponent);
    modalRef.componentInstance.showtime = showtime;
  }

}

