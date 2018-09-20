import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  
  score: number = 0;

  constructor() { }
  
  addScore() {
    this.score += 10;
    console.log("Score: "+this.score);
  }
}
