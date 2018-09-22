import { Injectable } from '@angular/core';
import { HeroImage } from '../interfaces/hero-image';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroImageService {

  apiKey: string = environment.apiKey;
  baseUrl: string = 'https://api.giphy.com/v1/gifs/search?api_key='+this.apiKey+'&limit=1&offset=0&rating=G&lang=en&fmt=json&q=';
  search: Observable<HeroImage>;
  cachedValue: string;

  constructor(private http: HttpClient) { }
  
  // Google Image
  /*
  heroImage : Function = (query: string) : Observable<HeroImage> => {
    if (!this.search) {
        this.search = this.http.get<HeroImage>(this.baseUrl + query);
        this.cachedValue = query;
    }
    else if (this.cachedValue !== query) {
        this.search = null;
        this.heroImage(query);
    }
    
    return this.search;
  }
  */
  
  // Giphy Image
  heroImage : Function = (query: string) : Observable<HeroImage> => {
    if (!this.search) {
        this.search = this.http.get<HeroImage>(this.baseUrl + query);
        this.cachedValue = query;
    }
    else if (this.cachedValue !== query) {
        this.search = null;
        this.heroImage(query);
    }
    
    return this.search;
  }
  
}
