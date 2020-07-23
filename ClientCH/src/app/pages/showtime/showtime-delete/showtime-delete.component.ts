import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {EventManagement} from '../../../shared/service/event.management';
import {ShowtimeModel} from '../../../model/showtime.model';
import {ShowtimeService} from '../../../shared/service/showtime.service';

@Component({
  selector: 'app-showtime-delete',
  templateUrl: './showtime-delete.component.html',
  styleUrls: ['./showtime-delete.component.css']
})
export class ShowtimeDeleteComponent implements OnInit {

  showtime: ShowtimeModel;

  constructor(public modal: NgbActiveModal,
              private showtimeService: ShowtimeService,
              private eventManagement: EventManagement) { }

  ngOnInit(): void {
  }

  delete() {
    this.showtimeService.delete(this.showtime.id).subscribe(
      () => {
        this.eventManagement.broadcast('UPDATE_SHOWTIME');
        this.modal.close();
      }, error => console.log(error)
    );
  }

}

