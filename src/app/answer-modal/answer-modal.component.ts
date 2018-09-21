import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ScoreService } from '../services/score.service';

export interface DialogData {
  namePerson: string,
  clickDet: boolean
}

@Component({
  selector: 'app-answer-modal',
  templateUrl: './answer-modal.component.html',
  styleUrls: ['./answer-modal.component.scss']
})
export class AnswerModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
              private ScoreService: ScoreService) { }

  ngOnInit() {
    this.checkAnswer();
  }

  checkAnswer() {
    console.log("clickDet: "+this.data.clickDet);
    let point = this.data.clickDet ? 5 : 10; 
    this.ScoreService.addScore(point);
  }
}
