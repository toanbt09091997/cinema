import {Component, Input, OnInit} from '@angular/core';
import {CinemaModel} from '../../../model/cinema.model';
import {RoomModel} from '../../../model/room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  @Input() rooms: RoomModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
