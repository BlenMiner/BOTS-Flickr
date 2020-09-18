import { Component, OnInit, Input } from '@angular/core';
import { IPhotosResult } from '../flickr.service';
import { BrowseviewComponent } from '../browseview/browseview.component';

@Component({
  selector: 'app-imageview',
  templateUrl: './imageview.component.html',
  styleUrls: ['./imageview.component.css']
})
export class ImageviewComponent implements OnInit {

  constructor() { }

  @Input() imageArrayToImageView : Array<string>;
  @Input() displayMode : string;
  @Input() imageArrayToImageViewAio : Array<Array<string>>;

  ngOnInit(): void {
    
  }


}
