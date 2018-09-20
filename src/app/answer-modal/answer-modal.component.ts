import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  namePerson: string
}

@Component({
  selector: 'app-answer-modal',
  templateUrl: './answer-modal.component.html',
  styleUrls: ['./answer-modal.component.scss']
})
export class AnswerModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

}
