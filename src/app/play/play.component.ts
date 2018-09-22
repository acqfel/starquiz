import { Component, OnInit } from '@angular/core';
import { AllPeopleService } from '../services/all-people.service';
import { ScoreService } from '../services/score.service';
import { AllPeople, Result } from '../interfaces/all-people';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  results: AllPeople;
  
  
  constructor(private AllPeopleService: AllPeopleService,
              private ScoreService: ScoreService,
              private router: Router) { }

  ngOnInit() {
    this.getAllPeople(1);
    this.ScoreService.resetScore();
    setTimeout(() => { this.router.navigate(['/points']); }, 10000);
  }

  getAllPeople = (page: number) => {
    this.AllPeopleService.allPeople(page).subscribe( (response) => {
      this.results = response;
      console.log(this.results);
    }, (error) => {
      alert("Error: " + error.statusText);
    })
  }

}
