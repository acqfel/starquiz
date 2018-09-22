import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements OnInit {

  totalPoints: number;

  constructor(private ScoreService: ScoreService) { }

  ngOnInit() {
    this.getTotalPoints();
  }

  getTotalPoints() {
    //this.totalPoints = Number(this.ScoreService.getScore());
    this.totalPoints = Number(sessionStorage.getItem('score'));
    console.log("Total - points: "+this.totalPoints);
  }

}
