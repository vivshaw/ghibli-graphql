import { Injectable } from '@nestjs/common';
import { PEOPLE } from 'src/data/people.json';
import { SPECIES } from 'src/data/species.json';

@Injectable()
export class PeopleService {
  people = PEOPLE;
  species = SPECIES;

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

  getPersonByVehicleId(id: string): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.people.find((person) => person.pilotOf.includes(id)));
    });
  }

  getPeopleBySpecies(id: string): Promise<any> {
    return new Promise((resolve) => {
      const species = this.species.find((specie) => specie.id === id);
      const people = species.people.map((personId) =>
        this.getPersonById(personId),
      );

      resolve(people);
    });
  }
}
