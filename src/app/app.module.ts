import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieLibraryComponent } from './movie-library/movie-library.component';
import { MovieDetailsComponent } from './movie-library/movie/movie-details/movie-details.component';
import { MovieItemComponent } from './movie-library/movie/movie-details/movie-item/movie-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieLibraryComponent,
    MovieDetailsComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
