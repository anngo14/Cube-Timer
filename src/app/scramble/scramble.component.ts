import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

const moves:string[] = ['U', "U'", 'U2', 'R', "R'", 'R2', 'L', "L'", 'L2', 'D', "D'", 'D2', 'F', "F'", 'F2', 'B', "B'", 'B2'];
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
    this.scrambleSolve();
    this.data.stateObs.subscribe(data => {
      this.state = data;
      if(this.state === 0){
        this.scrambleSolve();
      }
    });
  }

  scrambleSolve(){
    let i;
    //initial scramble of possible moves
    for(i = 0; i < this.scrambleNum; i ++){
      let randomIndex:number = Math.floor(Math.random() * (moves.length - 1));
      this.scramble[i] = moves[randomIndex];
    }
     //ensures good scramble
     for(i = 0 ; i < this.scrambleNum; i++){
      let next:string = '';
      if(i + 1 < this.scrambleNum){
        next = this.scramble[i + 1];
      }
      if(next != ''){
        while(this.scramble[i].charAt(0) === next.charAt(0)){
          let randomIndex:number = Math.floor(Math.random() * (moves.length - 1));
          this.scramble[i] = moves[randomIndex];
        }
      }
    }
  }
}
