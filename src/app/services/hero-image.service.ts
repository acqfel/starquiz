import { Injectable } from '@angular/core';
import { HeroImage } from '../interfaces/hero-image';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroImageService {

  baseUrl: string = 'https://api.giphy.com/v1/gifs/search?api_key=Wq7jKPN0fRCHf3ea0gtqfa61tg6mxMw2&limit=1&offset=0&rating=G&lang=en&fmt=json&q=';
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
