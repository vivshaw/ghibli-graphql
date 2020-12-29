import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from 'src/films/film.model';
import { Location } from 'src/locations/location.model';
import { Species } from 'src/species/species.model';
import { Vehicle } from 'src/vehicles/vehicle.model';
import { Repository } from 'typeorm';
import { Person } from './person.model';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  async all(): Promise<Person[]> {
    return this.personRepository.find();
  }

  async find(id: string): Promise<Person> {
    return this.personRepository.findOne(id);
  }

  async save(person: Person): Promise<Person> {
    return this.personRepository.save(person);
  }

  async filmsForPerson(person: Person): Promise<Film[]> {
    const query = await this.personRepository
      .createQueryBuilder('person')
      .where('person.id = :id', { id: person.id })
      .leftJoinAndSelect('person.films', 'films')
      .getOne();

    return query.films;
  }

  async speciesOfPerson(person: Person): Promise<Species> {
    const query = await this.personRepository
      .createQueryBuilder('person')
      .where('person.id = :id', { id: person.id })
      .leftJoinAndSelect('person.species', 'species')
      .getOne();

    return query.species;
  }

  async locationsOfPerson(person: Person): Promise<Location[]> {
    const query = await this.personRepository
      .createQueryBuilder('person')
      .where('person.id = :id', { id: person.id })
      .leftJoinAndSelect('person.locations', 'location')
      .getOne();

    return query.locations;
  }

  async vehiclesOfPerson(person: Person): Promise<Vehicle[]> {
    const query = await this.personRepository
      .createQueryBuilder('person')
      .where('person.id = :id', { id: person.id })
      .leftJoinAndSelect('person.pilotOf', 'vehicle')
      .getOne();

    return query.pilotOf;
  }
}
