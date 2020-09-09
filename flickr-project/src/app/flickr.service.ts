import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  search(tags: string): Observable<IPhotosResult> {
    const apiUrl = "https://www.flickr.com/services/rest/?method=flickr.photos.search";
    const api_key: string = "b77ab70e977903ba9c91e9d732d00f3f";

    return this.http.get<IPhotosResult>(`${apiUrl}&api_key=${api_key}&tags=${tags}&format=json&nojsoncallback=1`);
  }
}
