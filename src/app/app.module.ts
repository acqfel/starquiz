import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { AllPeopleService } from './services/all-people.service';
import { ScoreService } from './services/score.service';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { DetailsModalComponent } from './details-modal/details-modal.component';
import { AnswerModalComponent } from './answer-modal/answer-modal.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayComponent,
    DetailsModalComponent,
    AnswerModalComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule
  ],
  providers: [AllPeopleService,ScoreService],
  entryComponents: [DetailsModalComponent,AnswerModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
