import { Injectable } from '@nestjs/common';
import { SPECIES } from 'src/data/species.json';
import { PersonModel } from 'src/people/person.model';

@Injectable()
export class SpeciesService {
  species = SPECIES;

  getSpecies(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.species);
    });
  }

  getSpecieById(id: String): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.species.find((specie) => specie.id === id));
    });
  }

  getSpecieByPerson(person: PersonModel): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.getSpecieById(person.species));
    });
  }
}
