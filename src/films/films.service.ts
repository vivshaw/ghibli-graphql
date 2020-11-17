import { Injectable } from '@nestjs/common';
import { FILMS } from 'src/data/films.json';
import { PersonModel } from 'src/people/person.model';
import { SpeciesModel } from 'src/species/species.model';
import { VehicleModel } from 'src/vehicles/vehicle.model';

@Injectable()
export class FilmsService {
  films = FILMS;

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

  getFilmByVehicle(vehicle: VehicleModel): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.getFilmById(vehicle.film));
    });
  }

  getFilmsBySpecies(species: SpeciesModel): Promise<any> {
    return new Promise((resolve) => {
      const films = species.films.map((filmId) => this.getFilmById(filmId));

      resolve(films);
    });
  }

  getFilmsByPerson(person: PersonModel): Promise<any> {
    return new Promise((resolve) => {
      const films = person.films.map((filmId) => this.getFilmById(filmId));

      resolve(films);
    });
  }
}
