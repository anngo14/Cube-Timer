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

  private reset = new BehaviorSubject(false);
  resetObs = this.reset.asObservable();

  private trialPosition = new BehaviorSubject(0);
  trialPosObs = this.trialPosition.asObservable();

  constructor() { }

  changeState(s:number){
    this.state.next(s);
  }
  changeTrial(t:Time){
    this.trial.next(t);
  }
  changeReset(r:boolean){
    this.reset.next(r);
  }
  updatePosition(p:number){
    this.trialPosition.next(p);
  }
}
