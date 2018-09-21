import { Injectable } from '@angular/core';
import { HeroImage } from '../interfaces/hero-image';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroImageService {

  baseUrl: string = 'https://www.googleapis.com/customsearch/v1?imgColorType=color&imgSize=medium&lr=lang_en&num=1&searchType=image&key=AIzaSyAzpNSjRQkhe--NBbJ7p_IoExqt6miczu0&cx=016148679609242770504:zpvzq5xbf2o&q=';
  search: Observable<HeroImage>;
  cachedValue: string;

  constructor(private http: HttpClient) { }
  
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
