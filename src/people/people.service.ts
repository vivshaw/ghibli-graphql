import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import DataLoader from 'dataloader';
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
  ) {
    this.filmLoader = new DataLoader<string, Film[]>(this.filmsOfPeople);
    this.locationLoader = new DataLoader<string, Location[]>(
      this.locationsOfPeople,
    );
    this.speciesLoader = new DataLoader<string, Species>(this.speciesOfPeople);
    this.vehiclesLoader = new DataLoader<string, Vehicle[]>(
      this.vehiclesOfPeople,
    );
  }

  filmLoader: DataLoader<string, Film[]>;
  locationLoader: DataLoader<string, Location[]>;
  speciesLoader: DataLoader<string, Species>;
  vehiclesLoader: DataLoader<string, Vehicle[]>;

  async all(): Promise<Person[]> {
    return this.personRepository.find();
  }

  async find(id: string): Promise<Person> {
    return this.personRepository.findOne(id);
  }

  async save(person: Person): Promise<Person> {
    return this.personRepository.save(person);
  }

  filmsOfPeople = async (ids: string[]) => {
    const people = await this.personRepository
      .createQueryBuilder('person')
      .leftJoinAndSelect('person.films', 'films')
      .where('person.id IN (:...ids)', { ids })
      .getMany();

    return people.map((person) => person.films);
  };

  async loadFilmsForPerson(person: Person) {
    return this.filmLoader.load(person.id);
  }

  locationsOfPeople = async (ids: string[]) => {
    const people = await this.personRepository
      .createQueryBuilder('person')
      .where('person.id IN (:...ids)', { ids })
      .leftJoinAndSelect('person.locations', 'location')
      .getMany();

    return people.map((person) => person.locations);
  };

  async loadLocationsForPerson(person: Person) {
    return this.locationLoader.load(person.id);
  }

  speciesOfPeople = async (ids: string[]) => {
    const people = await this.personRepository
      .createQueryBuilder('person')
      .leftJoinAndSelect('person.species', 'species')
      .where('person.id IN (:...ids)', { ids })
      .getMany();

    return people.map((person) => person.species);
  };

  async loadSpeciesForPerson(person: Person) {
    return this.speciesLoader.load(person.id);
  }

  vehiclesOfPeople = async (ids: string[]) => {
    const people = await this.personRepository
      .createQueryBuilder('person')
      .leftJoinAndSelect('person.pilotOf', 'vehicle')
      .where('person.id IN (:...ids)', { ids })
      .getMany();

    return people.map((person) => person.pilotOf);
  };

  async loadVehiclesForPeople(person: Person) {
    return this.vehiclesLoader.load(person.id);
  }
}
