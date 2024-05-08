import { Component } from '@angular/core';
import { MeetingRoom, meetingRooms } from '../service/meeting-room';

@Component({
  selector: 'app-use-table',
  templateUrl: './use-table.component.html',
  styles: [
  ]
})
export class UseTableComponent {
  roomDataSource: MeetingRoom[] = meetingRooms;
  displaySequence: string[] = ["id",  "name", "size", "projector", "tv"];
  RowClick(row: any) {
    console.log(row);
  }
  getTotalSize(){
    return meetingRooms.map(r => r.size)
    .reduce((previousValue,currentValue)=> previousValue+currentValue);
  }

}
