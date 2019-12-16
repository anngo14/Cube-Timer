import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private state = new BehaviorSubject(0);
  stateObs = this.state.asObservable();

  private trial = new BehaviorSubject(0);
  trialObs = this.trial.asObservable();

  constructor() { }

  changeState(s:number){
    this.state.next(s);
  }
  changeTrial(t:number){
    this.trial.next(t);
  }
}
