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
      if(this.tableData.length >= 5){
        this.calculate5();
      }
      if(this.tableData.length >= 12){
        this.calculate12();
      }
      this.calculateMean();
    });
  }
  calculateMean(){
    let sum:number = 0;
    this.tableData.forEach((x) => {
      sum += x.time;
    });
    this.totalAvg = (sum / this.tableData.length).toFixed(2);
  }
  calculate5(){
    let sum:number = 0;
    let j = this.tableData.length - 1;
    for(let i = 0; i < 5; i++) {
      sum += this.tableData[j].time;
      j--;
    }
    this.ao5 = (sum / 5 ).toFixed(2);
  }
  calculate12(){
    let sum:number = 0;
    let j = this.tableData.length - 1;
    for(let i = 0; i < 12; i++) {
      sum += this.tableData[j].time;
      j--;
    }
    this.ao12 = (sum / 12 ).toFixed(2);
  }

}
