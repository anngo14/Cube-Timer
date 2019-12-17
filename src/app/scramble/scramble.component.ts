import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

const moves:string[] = ["U", "U'", "U2", "R", "R'", "R2", "L", "L'", "L2", "D", "D'", "D2", "F", "F'", "F2", "B", "B'", "B2"];
@Component({
  selector: 'app-scramble',
  templateUrl: './scramble.component.html',
  styleUrls: ['./scramble.component.css']
})

export class ScrambleComponent implements OnInit {

  scramble:string[] = [];
  scrambleNum:number = moves.length;
  state:number;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.stateObs.subscribe(data => {
      this.state = data;
      if(this.state === 0 || this.state === 3){
        this.scrambleSolve();
      }
    });
  }

  scrambleSolve(){
    let i;
    //initial scramble of possible moves
    for(i = 0; i < this.scrambleNum; i++){
      let randomIndex:number = Math.floor(Math.random() * (moves.length));
      this.scramble[i] = moves[randomIndex];
    }
     //ensures good scramble
     let next:string = '';
     let prev:string = '';
     for(i = 0 ; i < this.scrambleNum; i++){
      let j = i + 1;
      let k = i - 1;

      if(j < this.scrambleNum){
        next = this.scramble[i + 1];
      } else {
        next = '';
      }
      if(k >= 0){
        prev = this.scramble[i - 1];
      } else {
        prev = '';
      }
      
      let check = this.scramble[i];
      if(check.charAt(0) === next.charAt(0)){
        while(check.charAt(0) === next.charAt(0)){
          let randomIndex:number = Math.floor(Math.random() * (moves.length));
          check = moves[randomIndex];
        }
        this.scramble[i] = check;
      }
      if(check.charAt(0) === prev.charAt(0)){
        while(check.charAt(0) === prev.charAt(0)){
          let randomIndex:number = Math.floor(Math.random() * (moves.length));
          check = moves[randomIndex];
        }
        this.scramble[i] = check;
      }
    }
  }
}
