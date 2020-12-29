import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from 'src/films/film.model';
import { Person } from 'src/people/person.model';
import { Repository } from 'typeorm';
import { Species } from './species.model';

@Injectable()
export class SpeciesService {
  constructor(
    @InjectRepository(Species)
    private speciesRepository: Repository<Species>,
  ) {}

  async all(): Promise<Species[]> {
    return this.speciesRepository.find();
  }

  async find(id: string): Promise<Species> {
    return this.speciesRepository.findOne(id);
  }

  async save(species: Species): Promise<Species> {
    return this.speciesRepository.save(species);
  }

  async membersOfSpecies(species: Species): Promise<Person[]> {
    const query = await this.speciesRepository
      .createQueryBuilder('species')
      .where('species.id = :id', { id: species.id })
      .leftJoinAndSelect('species.people', 'people')
      .getOne();

    return query.people;
  }

  async filmsForSpecies(species: Species): Promise<Film[]> {
    const query = await this.speciesRepository
      .createQueryBuilder('species')
      .where('species.id = :id', { id: species.id })
      .leftJoinAndSelect('species.films', 'films')
      .getOne();

    return query.films;
  }
}
