import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IPhotosResult } from '../flickr.service';

@Component({
  selector: 'app-browseview',
  templateUrl: './browseview.component.html',
  styleUrls: ['./browseview.component.css']
})
export class BrowseviewComponent implements OnInit {

  constructor() { }

  @Input() imageArrayToBrowseView : Array<string>;
  incr = 0;
  imageToReturn = "";


  ngOnInit(): void {
    //alert("Browse ngOnInit is called");
  }


  previousImage()
  {   
      this.incr -= 1;
      if (this.incr < 0)
      {
        this.incr = this.imageArrayToBrowseView.length;
      }
      this.imageToReturn = this.imageArrayToBrowseView[this.incr];
  }

  nextImage()
  {
    this.incr += 1;
    if (this.incr > this.imageArrayToBrowseView.length)
    {
      this.incr = 0;
    }
    this.imageToReturn = this.imageArrayToBrowseView[this.incr];
  }

}
