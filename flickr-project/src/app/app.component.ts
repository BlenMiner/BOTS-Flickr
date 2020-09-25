import { Component } from '@angular/core';
import { FlickrService, IPhotosResult } from './flickr.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ImageviewComponent } from './imageview/imageview.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photosResult: IPhotosResult = null;
  searchEntry: string = "";
  minDateField: Date;
  maxDateField: Date;
  title = 'flickr-project';
  imageToReturn = "";
  builtImagesArray = [];
  totalRowNeeded: Number;
  displayType: string;

  currentPage: number = 0;

  constructor(private flickrService: FlickrService) {
      this.requestSearch();
  }

  requestSearch(): void {
    this.photosResult = null;

    this.flickrService.search(this.searchEntry,
        this.minDateField,
        this.maxDateField,
        false,
        true,
        this.currentPage).subscribe
    (
      (data) => {
        this.photosResult = data;
        this.builtImagesArray = [];
        let len = this.photosResult.photos.photo.length;
        this.totalRowNeeded = Math.round(len / 4);

        this.photosResult.photos.photo.forEach(element => {
            this.builtImagesArray.push(this.flickrService.get_img_url(element));
        });

        let e = document.getElementById("display_type");
        this.displayType = e.options[e.selectedIndex].value;

        console.log("Total links: " + len);
        console.log("Display in mode: " + this.displayType);
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

}
