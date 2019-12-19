import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Time } from 'src/models/time';
import { MatTableDataSource } from '@angular/material/table';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent implements OnInit {

  ao5 = 'n/a';
  ao12 = 'n/a';
  totalAvg = 'n/a';
  displayedColumns: string[] = ['position', 'time', 'delete'];
  tableData: Time[] = [];
  dataSource = new MatTableDataSource();
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.trialObs.subscribe(data => {
      if(data.position != -1 && data.time != -1){
        this.tableData.unshift(data);
        this.dataSource.data = this.tableData;
        this.calculateMean();
      }
      if(this.tableData.length >= 5){
        this.calculate5();
      }
      if(this.tableData.length >= 12){
        this.calculate12();
      }
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
    for(let i = 0; i < 5; i++) {
      sum += this.tableData[i].time;
    }
    this.ao5 = (sum / 5 ).toFixed(2);
  }
  calculate12(){
    let sum:number = 0;
    for(let i = 0; i < 12; i++) {
      sum += this.tableData[i].time;
    }
    this.ao12 = (sum / 12 ).toFixed(2);
  }
  reset(){
    this.tableData = [];
    this.dataSource = new MatTableDataSource();
    this.ao5 = 'n/a';
    this.ao12 = 'n/a';
    this.totalAvg = 'n/a';
    this.data.changeReset(true);
  }
  deleteTrial(trial:Time){
    let index = this.tableData.indexOf(trial);
    this.tableData.splice(index, 1);
    if(index > 0){
      for(let i = 0; i < index; i++) {
        let temp = this.tableData[i].position;
        this.tableData[i].position = temp - 1;
      }
    }
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.tableData;
    
    if(this.tableData.length === 0){
      this.reset();
    }
    if(this.tableData.length > 0){
      this.data.updatePosition(this.tableData[0].position);
      this.calculateMean();
      if(this.tableData.length >= 5){
        this.calculate5();
      } else {
        this.ao5 = 'n/a';
      }
      if(this.tableData.length >= 12){
        this.calculate12();
      } else {
        this.ao12 = 'n/a';
      }
    } else {
      this.totalAvg = 'n/a';
    }
  }
}
