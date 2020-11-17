import { Injectable } from '@nestjs/common';
import { FILMS } from 'src/data/films.json';
import { SPECIES } from 'src/data/species.json';

@Injectable()
export class FilmsService {
  films = FILMS;
  species = SPECIES;

  getFilms(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.films);
    });
  }

  getFilmById(id: String): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.films.find((film) => film.id === id));
    });
  }

  getFilmByVehicleId(id: string): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.films.find((film) => film.vehicles.includes(id)));
    });
  }

  getFilmsBySpeciesId(id: string): Promise<any> {
    return new Promise((resolve) => {
      const species = this.species.find((specie) => specie.id === id);
      const films = species.films.map((filmId) => this.getFilmById(filmId));

      resolve(films);
    });
  }
}
