import { Injectable } from '@angular/core';
import { HeroImage } from '../interfaces/hero-image';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroImageService {

  baseUrl: string = 'https://www.googleapis.com/customsearch/v1?imgColorType=color&imgSize=medium&lr=lang_en&num=1&searchType=image&key=AIzaSyAazrxOHG3XwrV1lBdunAGxo-wuUw0WTlw&cx=016148679609242770504:zpvzq5xbf2o&q=';

  constructor(private http: HttpClient) { }
  
  heroImage : Function = (query: string) : Observable<HeroImage> => {
    return this.http.get<HeroImage>(this.baseUrl + query);
  }
  
}
