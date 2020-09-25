import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aioview',
  templateUrl: './aioview.component.html',
  styleUrls: ['./aioview.component.css']
})
export class AioviewComponent implements OnInit {

  constructor() { }

  @Input() imageArray : Array<Array<string>>;

  ngOnInit(): void {
  }

  openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

}
