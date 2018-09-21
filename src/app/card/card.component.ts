import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DetailsModalComponent } from '../details-modal/details-modal.component';
import { AnswerModalComponent } from '../answer-modal/answer-modal.component';
import { Result } from '../interfaces/all-people';
import { HeroImageService } from '../services/hero-image.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item: Result;
  
  clickDetails: boolean = false;
  photo: string;

  constructor(public dialog: MatDialog,
              private HeroImageService: HeroImageService) { }

  ngOnInit() {
    this.getHeroImage();
  }
  
   // Modal
  openDetails = (item: Result) => {
    this.clickDetails = true;
    
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
    let clickDet = this.clickDetails;
    this.dialog.open(AnswerModalComponent, 
                    {width: '550px', 
                      height: '450px', 
                      data: {namePerson: namePerson,
                              clickDet: clickDet}
                    });
  }
  
  getHeroImage = () => {
    this.HeroImageService.heroImage(this.item.name).subscribe( (response) => {
      this.photo = response.data[0].images.fixed_height_still.url;
    }, (error) => {
      alert("Error: " + error.statusText);
    })
  }

}
