import { Component } from '@angular/core';
import { FlickrService, IPhotosResult } from './flickr.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photosResult: IPhotosResult = null;
  searchEntry: string = "";
  title = 'flickr-project';

  constructor(private flickrService: FlickrService) {}

  requestSearch(): void {
    this.photosResult = null;

    this.flickrService.search(this.searchEntry).subscribe(
      (data) => {
        this.photosResult = data;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }
}
