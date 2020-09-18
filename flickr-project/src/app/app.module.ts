import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { ImageviewComponent } from './imageview/imageview.component';
import { BrowseviewComponent } from './browseview/browseview.component';
import { AioviewComponent } from './aioview/aioview.component';


@NgModule({
  declarations: [
    AppComponent,
    NavheaderComponent,
    ToolboxComponent,
    ImageviewComponent,
    BrowseviewComponent,
    AioviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
