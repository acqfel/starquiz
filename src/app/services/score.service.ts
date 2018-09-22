import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  
  score: number = 0;

  constructor() { 
  }
  
  addScore(point: number) {
    this.score = Number(sessionStorage.getItem('score'));
    this.score += point;
    sessionStorage.setItem('score', this.score.toString());
    console.log("Score: "+Number(sessionStorage.getItem('score')));
  }
  
  getScore() {
    return Number(sessionStorage.getItem('score'));
  }
  
  resetScore() {
    sessionStorage.setItem('score', '0');
  }
}
