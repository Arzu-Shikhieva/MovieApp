import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import {subscribeOn} from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent {
  title = 'Movie List';
  movies: Movie[];
  selectedMovie: Movie;

  constructor(private movieService: MovieService) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => {
      this.movies = movies;
    });
  }

  add(name: string, imageUrl: string, description: string): void {
    this.movieService.add({
      name,
      imageUrl,
      description
    }as Movie).subscribe(movie => this.movies.push(movie));
  }

  delete(movie: Movie): void {
    this.movies = this.movies.filter(m => m !== movie);
    this.movieService.delete(movie).subscribe();
  }
}
