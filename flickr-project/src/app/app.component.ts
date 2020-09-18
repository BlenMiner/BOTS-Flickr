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
  builtImagesArrayForAio = [];
  totalRowNeeded: Number;
  displayType: string;

  constructor(private flickrService: FlickrService) {}

  requestSearch(): void {
    this.photosResult = null;

    this.flickrService.search(this.searchEntry, this.minDateField, this.maxDateField).subscribe(
      (data) => {
        this.photosResult = data;
        this.builtImagesArray = [];
        let len = this.photosResult.photos.photo.length;
        this.totalRowNeeded = Math.round(len / 4);

        this.photosResult.photos.photo.forEach(element => {
            this.builtImagesArray.push("https://farm" + element.farm + ".staticflickr.com/" + element.server + "/" + element.id + "_" + element.secret + ".jpg");
        });

        let counter = 0;
        for (let i = 0; i < this.totalRowNeeded; i++) {
          let imagesLinkArray = [];
          for (let j = 0; j < 4; j++) {
            if (this.builtImagesArray[counter] !== undefined)
            {
              imagesLinkArray.push(this.builtImagesArray[counter]);
            }
            
            counter++;
            
          }
          if (imagesLinkArray.length != 0)
          {
            this.builtImagesArrayForAio.push(imagesLinkArray);
          }
          counter++;
          
          /*if (imagesLinkArray !== undefined)
          {
            this.builtImagesArrayForAio.push(imagesLinkArray);
          }*/
          
        }

        console.log("Printing Array for AIO");

        this.builtImagesArrayForAio.forEach(element => {

          console.log(element);
          
        });
        
        console.log("Total links: " + len);
        console.log("Display in mode: " + this.displayType);
        //console.log(this.builtImagesArray);
        //console.log("We need " + this.totalRowNeeded + " rows");
        
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

}
