import { Injectable } from '@nestjs/common';
import { LOCATIONS } from 'src/data/locations.json';
import { FilmModel } from 'src/films/film.model';
import { LocationModel } from './location.model';

@Injectable()
export class LocationsService {
  locations = LOCATIONS;

  async getLocations(): Promise<LocationModel[]> {
    return this.locations;
  }

  async getLocationById(id: string): Promise<LocationModel> {
    return this.locations.find((location) => location.id === id);
  }

  async getLocationsByFilm(film: FilmModel): Promise<LocationModel[]> {
    return this.locations.filter((location) =>
      location.films.includes(film.id),
    );
  }
}
