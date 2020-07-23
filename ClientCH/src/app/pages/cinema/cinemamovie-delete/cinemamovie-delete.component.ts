import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {EventManagement} from '../../../shared/service/event.management';
import {CinemamovieModel} from '../../../model/cinemamovie.model';
import {CinemamovieService} from '../../../shared/service/cinemamovie.service';

@Component({
  selector: 'app-cinemamovie-delete',
  templateUrl: './cinemamovie-delete.component.html',
  styleUrls: ['./cinemamovie-delete.component.css']
})
export class CinemamovieDeleteComponent implements OnInit {
  cinemamovie: CinemamovieModel;
  constructor(public modal: NgbActiveModal,
              private cinemamovieService: CinemamovieService,
              private eventManagement: EventManagement) { }

  ngOnInit(): void {
  }

  delete() {
    this.cinemamovieService.delete(this.cinemamovie.id).subscribe(
      () => {
        this.eventManagement.broadcast('UPDATE_CINEMAMOVIE');
        this.modal.close();
      }, error => console.log(error)
    );
  }
}
