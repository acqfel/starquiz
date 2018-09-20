import { Component, OnInit } from '@angular/core';
import { AllPeopleService } from '../services/all-people.service';
import { AllPeople, Result } from '../interfaces/all-people';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DetailsModalComponent } from '../details-modal/details-modal.component';
import { AnswerModalComponent } from '../answer-modal/answer-modal.component';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  results: AllPeople;
  
  constructor(private AllPeopleService: AllPeopleService,
              public dialog: MatDialog) { }

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
  
  // Modal
  openDetails = (item: Result) => {
    let species = item.species;
    let height = item.height;
    let hair_color = item.hair_color;
    let homeworld = item.homeworld;
    let films = item.films;
    let vehicles = item.vehicles;
    this.dialog.open(DetailsModalComponent, 
                    {width: '550px', 
                    height: '450px', 
                    data: {species: species,
                           height: height,
                           hair_color: hair_color,
                           homeworld: homeworld,
                           films: films,
                           vehicles: vehicles
                      }
                    });
  }
  
  openAnswer = (name: string) => {
    let namePerson = name;
    this.dialog.open(AnswerModalComponent, 
                    {width: '550px', 
                      height: '450px', 
                      data: {namePerson: namePerson}
                    });
  }

}
