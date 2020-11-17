import { Injectable } from '@nestjs/common';
import { FILMS }  from "./data/films.json";

@Injectable()
export class FilmsService {
  films = FILMS;

  getFilms(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.films);
    })
  }

  getFilmById(id: String): Promise<any> {
    return new Promise(resolve => {
      resolve(this.films.find(film => film.id === id));
    })
  }
}
