import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  inspectionTime = 15;
  seconds = 0.00;
  timeID;
  inspectionID;
  running: number = 0;
  key;
  constructor() { }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event:KeyboardEvent) {
    this.key = event.key;
    if(this.key === ' '){
      this.start();
    }
  }

  ngOnInit() {
  }

  startTimer()
  {
    clearInterval(this.inspectionID);
    this.seconds = 0.00;
    this.running = 2;
    this.timeID = setInterval(() => {
      this.seconds += .01;
    }, 10);
    
  }
  stopTimer(){
    this.running = 0;
    this.inspectionTime = 15;
    clearInterval(this.timeID);
  }
  start(){
    this.running += 1;
    if(this.running > 2){
      this.running = 0;
    }
    switch(this.running){
      case 0: 
        this.stopTimer();
        break;
      case 1:
        this.inspection();
        break;
      case 2:
        this.startTimer();
        break;
    }
  }
  inspection(){
    this.inspectionID = setInterval(() => {
        this.inspectionTime -= 1;
        if(this.inspectionTime === 0){
          this.startTimer();
        }
      }, 1000);
  }
}
