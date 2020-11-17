import { Injectable } from '@nestjs/common';
import { PEOPLE } from 'src/data/people.json';
import { FilmModel } from 'src/films/film.model';
import { LocationModel } from 'src/locations/location.model';
import { SpeciesModel } from 'src/species/species.model';
import { VehicleModel } from 'src/vehicles/vehicle.model';

@Injectable()
export class PeopleService {
  people = PEOPLE;

  getPeople(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.people);
    });
  }

  getPersonById(id: String): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.people.find((person) => person.id === id));
    });
  }

  getPersonByVehicle(vehicle: VehicleModel): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.getPersonById(vehicle.pilot));
    });
  }

  getPeopleBySpecies(species: SpeciesModel): Promise<any> {
    return new Promise((resolve) => {
      const people = species.people.map((personId) =>
        this.getPersonById(personId),
      );

      resolve(people);
    });
  }

  getPeopleByLocation(location: LocationModel): Promise<any> {
    return new Promise((resolve) => {
      const people = location.residents.map((personId) =>
        this.getPersonById(personId),
      );

      resolve(people);
    });
  }

  getPeopleByFilm(film: FilmModel): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.people.filter((person) => person.films.includes(film.id)));
    });
  }
}
