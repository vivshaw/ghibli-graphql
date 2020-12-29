import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as DataLoader from 'dataloader';
import { Film } from 'src/films/film.model';
import { Person } from 'src/people/person.model';
import { Repository } from 'typeorm';
import { Species } from './species.model';

@Injectable()
export class SpeciesService {
  constructor(
    @InjectRepository(Species)
    private speciesRepository: Repository<Species>,
  ) {
    this.filmLoader = new DataLoader<string, Film[]>(this.filmsOfSpecies);
    this.peopleLoader = new DataLoader<string, Person[]>(this.membersOfSpecies);
  }

  filmLoader: DataLoader<string, Film[]>;
  peopleLoader: DataLoader<string, Person[]>;

  async all(): Promise<Species[]> {
    return this.speciesRepository.find();
  }

  async find(id: string): Promise<Species> {
    return this.speciesRepository.findOne(id);
  }

  async save(species: Species): Promise<Species> {
    return this.speciesRepository.save(species);
  }

  membersOfSpecies = async (ids: string[]) => {
    const species = await this.speciesRepository
      .createQueryBuilder('species')
      .leftJoinAndSelect('species.people', 'people')
      .where('species.id IN (:...ids)', { ids })
      .getMany();

    return species.map((species) => species.people);
  };

  async loadMembersOfSpecies(species: Species) {
    return this.peopleLoader.load(species.id);
  }

  filmsOfSpecies = async (ids: string[]) => {
    const species = await this.speciesRepository
      .createQueryBuilder('species')
      .leftJoinAndSelect('species.films', 'films')
      .where('species.id IN (:...ids)', { ids })
      .getMany();

    return species.map((species) => species.films);
  };

  async loadFilmsForSpecies(species: Species) {
    return this.filmLoader.load(species.id);
  }
}
