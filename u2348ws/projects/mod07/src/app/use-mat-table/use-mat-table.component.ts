import { Component, OnInit, ViewChild } from '@angular/core';
import { MeetingRoom, meetingRooms } from '../service/meeting-room';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-use-mat-table',
  templateUrl: './use-mat-table.component.html',
  styles: [
  ]
})
export class UseMatTableComponent implements OnInit {
  roomDataSource!: MatTableDataSource<MeetingRoom>;
  displaySequence: string[] = ["id", "name", "size", "projector", "tv"];
  constructor() {

  }

  ngAfterContentInit() {
    this.roomDataSource = new MatTableDataSource(meetingRooms);
  }


  ngOnInit(): void {

  }

  RowClick(row: any) {
    console.log(row);
  }
  getTotalSize(){
    return meetingRooms.map(r => r.size).reduce((previousValue,currentValue)=> previousValue+currentValue);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit(){
    this.roomDataSource.paginator = this.paginator;   
    this.roomDataSource.sort = this.sort; 
  }

 

}
