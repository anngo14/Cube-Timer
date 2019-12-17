import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Time } from 'src/models/time';
import { MatTableDataSource } from '@angular/material/table';

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
  tableData: Time[] = [];
  dataSource = new MatTableDataSource();
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.trialObs.subscribe(data => {
      if(data.position != -1 && data.time != -1){
        this.tableData.push(data);
        this.dataSource.data = this.tableData;
      }
      console.log(this.dataSource);
    });
  }

}
