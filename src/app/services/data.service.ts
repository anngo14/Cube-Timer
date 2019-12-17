import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Time } from 'src/models/time';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private state = new BehaviorSubject(0);
  stateObs = this.state.asObservable();

  timeTemp:Time = {
    position: -1,
    time: -1
  };
  private trial = new BehaviorSubject(this.timeTemp);
  trialObs = this.trial.asObservable();

  constructor() { }

  changeState(s:number){
    this.state.next(s);
  }
  changeTrial(t:Time){
    this.trial.next(t);
  }
}
