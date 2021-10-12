import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieLibraryComponent } from './movie-library/movie-library.component';
import { MovieDetailsComponent } from './movie-library/movie/movie-details/movie-details.component';
import { TitleComponent } from './movie-library/movie/movie-details/title/title.component';
import { CoverArtComponent } from './movie-library/movie/movie-details/cover-art/cover-art.component';
import { StarsComponent } from './movie-library/movie/movie-details/stars/stars.component';
import { SynopsisComponent } from './movie-library/movie/movie-details/synopsis/synopsis.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieLibraryComponent,
    MovieDetailsComponent,
    TitleComponent,
    CoverArtComponent,
    StarsComponent,
    SynopsisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
