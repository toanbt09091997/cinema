import { Component, OnInit } from '@angular/core';
import {EventManagement} from '../../../shared/service/event.management';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RoomModel} from '../../../model/room.model';
import {RoomService} from '../../../shared/service/room.service';
import {RoomDeleteComponent} from '../room-delete/room-delete.component';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms: RoomModel[] = [];
  constructor(private roomService: RoomService,
              private eventManagement: EventManagement,
              public modal: NgbModal) { }

  ngOnInit(): void {
    this.loadRooms();
    this.eventManagement.subscribe('UPDATE_ROOM', () => this.loadRooms());
  }
  loadRooms() {
    this.roomService.fetch().subscribe(room => {
      this.rooms = room;
    }, error => console.log(error));
  }

  goToDelete(room: RoomModel) {
    const modalRef = this.modal.open(RoomDeleteComponent);
    modalRef.componentInstance.room = room;
  }


}
