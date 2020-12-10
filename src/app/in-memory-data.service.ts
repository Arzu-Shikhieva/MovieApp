import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Movie} from './movie';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const movies = [
      {id: 1, name: 'movie 1', description: "Perfect Film", imageUrl: "1.jpg"},
      {id: 2, name: 'movie 2', description: "Romantik Komedi", imageUrl: "2.jpg"},
      {id: 3, name: 'movie 3', description: "House of Wax", imageUrl: "3.jpg"},
      {id: 4, name: 'movie 4', description: "Friends", imageUrl: "4.jpg"},
      {id: 5, name: 'movie 5', description: "Bastille Day", imageUrl: "5.jpg"},
      {id: 6, name: 'movie 6', description: "Silicon Valley", imageUrl: "6.jpg"},
      {id: 7, name: 'movie 7', description: "Taboo", imageUrl: "7.jpg"},
      {id: 8, name: 'movie 8', description: "Scream", imageUrl: "8.jpg"},
      {id: 9, name: 'movie 9', description: "You", imageUrl: "9.jpg"}
    ];
    return {movies};
  }

  constructor() { }
}
