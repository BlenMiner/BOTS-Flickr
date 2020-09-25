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

  search(tags: string, minDate?: Date, maxDate?: Date, inGallery: boolean = false, nsfw: boolean = true, page: number = 1): Observable<IPhotosResult> {
    const apiUrl = "https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&media=photos";
    const api_key: string = "b77ab70e977903ba9c91e9d732d00f3f";

    let filters = `&in_gallery=${inGallery}&page=${page}&safe_search=${nsfw ? '3' : '2'}`;

    if (minDate) filters += "&min_upload_date=" + minDate;
    if (maxDate) filters += "&min_upload_date=" + maxDate;

    return this.http.get<IPhotosResult>(`${apiUrl}&api_key=${api_key}&text=${tags}${filters}`);
  }

  get_img_url(element: IPhoto): String {
    return "https://farm" + element.farm + ".staticflickr.com/" + element.server + "/" + element.id + "_" + element.secret + ".jpg";
  }
}
