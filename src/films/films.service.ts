import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from 'src/locations/location.model';
import { Person } from 'src/people/person.model';
import { Species } from 'src/species/species.model';
import { Vehicle } from 'src/vehicles/vehicle.model';
import { Repository } from 'typeorm';
import { Film } from './film.model';

@Injectable()
export class FilmsService {
  constructor(
    @InjectRepository(Film)
    private filmRepository: Repository<Film>,
  ) {}

  async all(): Promise<Film[]> {
    return this.filmRepository.find();
  }

  async find(id: string): Promise<Film> {
    return this.filmRepository.findOne(id);
  }

  async save(film: Film): Promise<Film> {
    return this.filmRepository.save(film);
  }

  async peopleInFilm(film: Film): Promise<Person[]> {
    const query = await this.filmRepository
      .createQueryBuilder('film')
      .where('film.id = :id', { id: film.id })
      .leftJoinAndSelect('film.people', 'people')
      .getOne();

    return query.people;
  }

  async vehiclesInFilm(film: Film): Promise<Vehicle[]> {
    const query = await this.filmRepository
      .createQueryBuilder('film')
      .where('film.id = :id', { id: film.id })
      .leftJoinAndSelect('film.vehicles', 'vehicles')
      .getOne();

    return query.vehicles;
  }

  async locationsInFilm(film: Film): Promise<Location[]> {
    const query = await this.filmRepository
      .createQueryBuilder('film')
      .where('film.id = :id', { id: film.id })
      .leftJoinAndSelect('film.locations', 'locations')
      .getOne();

    return query.locations;
  }

  async speciesInFilm(film: Film): Promise<Species[]> {
    const query = await this.filmRepository
      .createQueryBuilder('film')
      .where('film.id = :id', { id: film.id })
      .leftJoinAndSelect('film.species', 'species')
      .getOne();

    return query.species;
  }
}
