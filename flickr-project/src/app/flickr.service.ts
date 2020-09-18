import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IPhoto {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
}

export interface IPhotos {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: IPhoto[];
}

export interface IPhotosResult {
  photos: IPhotos;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  result: IPhotosResult = null;
  constructor(private http: HttpClient) { }

  search(text: string, minDate?: Date, maxDate?: Date): Observable<IPhotosResult> {
    let apiKey = "3e120b161195c11e5e35d6dac8a1b548";
    let fullLink = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + apiKey;
    
    if (!text || text == "")
    {
      return null;
    }
    
    fullLink += "&text=" + text;
    if (minDate)
    {
        fullLink += "&min_upload_date=" + minDate;
    }
    if (maxDate)
    {
        fullLink += "&min_upload_date=" + maxDate;
    }


    const apiUrl = "https://www.flickr.com/services/rest/?method=flickr.photos.search";
    const api_key: string = "3e120b161195c11e5e35d6dac8a1b548";

    console.log(fullLink + "&format=json&nojsoncallback=1");
    
    return this.http.get<IPhotosResult>(fullLink + "&format=json&nojsoncallback=1");

    //return this.http.get<IPhotosResult>(`${apiUrl}&api_key=${api_key}&text=${tags}&format=json&nojsoncallback=1`);
  }

}
