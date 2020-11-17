import { Injectable } from '@nestjs/common';
import { SPECIES } from 'src/data/species.json';
import { FilmModel } from 'src/films/film.model';
import { PersonModel } from 'src/people/person.model';
import { SpeciesModel } from './species.model';

@Injectable()
export class SpeciesService {
  species = SPECIES;

  async getSpecies(): Promise<SpeciesModel[]> {
    return this.species;
  }

  async getSpecieById(id: String): Promise<SpeciesModel> {
    return this.species.find((specie) => specie.id === id);
  }

  async getSpecieByPerson(person: PersonModel): Promise<SpeciesModel> {
    return this.getSpecieById(person.species);
  }

  async getSpeciesByFilm(film: FilmModel): Promise<SpeciesModel[]> {
    return this.species.filter((specie) => specie.films.includes(film.id));
  }
}
