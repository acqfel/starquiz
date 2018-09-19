import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { AllPeopleService } from './services/all-people.service';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [AllPeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
