import { Injectable } from '@nestjs/common';
import { LOCATIONS } from 'src/data/locations.json';
import { FilmModel } from 'src/films/film.model';

@Injectable()
export class LocationsService {
  locations = LOCATIONS;

  getLocations(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.locations);
    });
  }

  getLocationById(id: String): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.locations.find((location) => location.id === id));
    });
  }

  getLocationsByFilm(film: FilmModel): Promise<any> {
    return new Promise((resolve) => {
      resolve(
        this.locations.filter((location) => location.films.includes(film.id)),
      );
    });
  }
}
