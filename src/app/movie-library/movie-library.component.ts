import { Component, OnInit } from '@angular/core';
import { Movie } from './movie/movie.model';

@Component({
  selector: 'app-movie-library',
  templateUrl: './movie-library.component.html',
  styleUrls: ['./movie-library.component.css']
})
export class MovieLibraryComponent implements OnInit {


    movies: Movie[] = [
      new Movie('The Departed', 9.0, 'https://fanart.tv/fanart/movies/1422/movieposter/the-departed-540d79705c000.jpg', 'lorem epsum blah blah'),
      new Movie('WALL-E', 9.5, 'https://fanart.tv/fanart/movies/10681/movieposter/walle-5543a08739869.jpg', 'lorem epsum blah blah'),
      new Movie('The Departed', 9.0, 'https://fanart.tv/fanart/movies/1422/movieposter/the-departed-540d79705c000.jpg', 'lorem epsum blah blah'),
      new Movie('WALL-E', 9.5, 'https://fanart.tv/fanart/movies/10681/movieposter/walle-5543a08739869.jpg', 'lorem epsum blah blah'),
      new Movie('The Departed', 9.0, 'https://fanart.tv/fanart/movies/1422/movieposter/the-departed-540d79705c000.jpg', 'lorem epsum blah blah'),
      new Movie('WALL-E', 9.5, 'https://fanart.tv/fanart/movies/10681/movieposter/walle-5543a08739869.jpg', 'lorem epsum blah blah'),
      new Movie('The Departed', 9.0, 'https://fanart.tv/fanart/movies/1422/movieposter/the-departed-540d79705c000.jpg', 'lorem epsum blah blah'),
      new Movie('WALL-E', 9.5, 'https://fanart.tv/fanart/movies/10681/movieposter/walle-5543a08739869.jpg', 'lorem epsum blah blah'),
      new Movie('The Departed', 9.0, 'https://fanart.tv/fanart/movies/1422/movieposter/the-departed-540d79705c000.jpg', 'lorem epsum blah blah'),
      new Movie('WALL-E', 9.5, 'https://fanart.tv/fanart/movies/10681/movieposter/walle-5543a08739869.jpg', 'lorem epsum blah blah'),
      new Movie('The Departed', 9.0, 'https://fanart.tv/fanart/movies/1422/movieposter/the-departed-540d79705c000.jpg', 'lorem epsum blah blah'),
      new Movie('WALL-E', 9.5, 'https://fanart.tv/fanart/movies/10681/movieposter/walle-5543a08739869.jpg', 'lorem epsum blah blah'),
      new Movie('Guardians Of The Galaxy', 9.2, 'https://fanart.tv/fanart/music/03cfec4a-9885-444c-9e74-5fbab5861106/albumcover/guardians-of-the-galaxy-54c533981938d.jpg', 'lorem epsum blah blah')
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
