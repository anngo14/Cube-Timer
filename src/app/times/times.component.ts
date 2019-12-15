import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent implements OnInit {

  ao5 = 'n/a';
  ao12 = 'n/a';
  totalAvg = 'n/a';
  displayedColumns: string[] = ['position', 'time'];
  tableData: Time[];
  dataSource = this.tableData;
  constructor() { }

  ngOnInit() {
  }

}
