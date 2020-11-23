import { Injectable } from '@nestjs/common';
import { FILMS } from 'src/data/films.json';
import { LocationModel } from 'src/locations/location.model';
import { PersonModel } from 'src/people/person.model';
import { SpeciesModel } from 'src/species/species.model';
import { VehicleModel } from 'src/vehicles/vehicle.model';
import { FilmModel } from './film.model';

@Injectable()
export class FilmsService {
  films = FILMS;

  async getFilms(): Promise<FilmModel[]> {
    return this.films;
  }

  async getFilmById(id: string): Promise<FilmModel> {
    return this.films.find((film) => film.id === id);
  }

  async getFilmByVehicle(vehicle: VehicleModel): Promise<FilmModel> {
    return this.getFilmById(vehicle.film);
  }

  async getFilmsBySpecies(species: SpeciesModel): Promise<FilmModel[]> {
    const films = species.films.map((filmId) => this.getFilmById(filmId));

    return Promise.all(films);
  }

  async getFilmsByPerson(person: PersonModel): Promise<FilmModel[]> {
    const films = await person.films.map((filmId) => this.getFilmById(filmId));

    return Promise.all(films);
  }

  async getFilmsByLocation(location: LocationModel): Promise<FilmModel[]> {
    const films = location.films.map((filmId) => this.getFilmById(filmId));

    return Promise.all(films);
  }
}
