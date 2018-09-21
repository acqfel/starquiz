import { Component, OnInit } from '@angular/core';
import { AllPeopleService } from '../services/all-people.service';
import { AllPeople, Result } from '../interfaces/all-people';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  results: AllPeople;
  
  constructor(private AllPeopleService: AllPeopleService) { }

  ngOnInit() {
    this.getAllPeople(1);
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
