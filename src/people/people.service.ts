import { Injectable } from '@nestjs/common';
import { PEOPLE } from 'src/data/people.json';
import { FilmModel } from 'src/films/film.model';
import { LocationModel } from 'src/locations/location.model';
import { SpeciesModel } from 'src/species/species.model';
import { VehicleModel } from 'src/vehicles/vehicle.model';
import { PersonModel } from './person.model';

@Injectable()
export class PeopleService {
  people = PEOPLE;

  async getPeople(): Promise<PersonModel[]> {
    return this.people;
  }

  async getPersonById(id: String): Promise<PersonModel> {
    return this.people.find((person) => person.id === id);
  }

  async getPersonByVehicle(vehicle: VehicleModel): Promise<PersonModel> {
    return this.getPersonById(vehicle.pilot);
  }

  async getPeopleBySpecies(species: SpeciesModel): Promise<PersonModel[]> {
    const people = species.people.map((personId) =>
      this.getPersonById(personId),
    );

    return Promise.all(people);
  }

  async getPeopleByLocation(location: LocationModel): Promise<PersonModel[]> {
    const people = location.residents.map((personId) =>
      this.getPersonById(personId),
    );

    return Promise.all(people);
  }

  async getPeopleByFilm(film: FilmModel): Promise<PersonModel[]> {
    return this.people.filter((person) => person.films.includes(film.id));
  }
}
