import { Injectable } from '@angular/core';
import { AllPeople } from '../iterfaces/all-people';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AllPeopleService {
  
  baseUrl: string= 'https://swapi.co/api/people/?page=';
  page: number;

  constructor(private http: HttpClient) { }
  
  allPeople : Function = (page: number) : Observable<AllPeople> => {
    return this.http.get<AllPeople>(this.baseUrl + page);
  }

}
