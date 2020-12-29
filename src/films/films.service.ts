import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as DataLoader from 'dataloader';
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
  ) {
    this.locationLoader = new DataLoader<string, Location[]>(
      this.locationsOfFilms,
    );
    this.peopleLoader = new DataLoader<string, Person[]>(this.peopleOfFilms);
    this.speciesLoader = new DataLoader<string, Species[]>(this.speciesOfFilms);
    this.vehicleLoader = new DataLoader<string, Vehicle[]>(
      this.vehiclesOfFilms,
    );
  }

  locationLoader: DataLoader<string, Location[]>;
  peopleLoader: DataLoader<string, Person[]>;
  speciesLoader: DataLoader<string, Species[]>;
  vehicleLoader: DataLoader<string, Vehicle[]>;

  async all(): Promise<Film[]> {
    return this.filmRepository.find();
  }

  async find(id: string): Promise<Film> {
    return this.filmRepository.findOne(id);
  }

  async save(film: Film): Promise<Film> {
    return this.filmRepository.save(film);
  }

  locationsOfFilms = async (ids: string[]) => {
    const films = await this.filmRepository
      .createQueryBuilder('film')
      .leftJoinAndSelect('film.locations', 'locations')
      .where('film.id IN (:...ids)', { ids })
      .getMany();

    return films.map((film) => film.locations);
  };

  async loadLocationsForFilm(film: Film) {
    return this.locationLoader.load(film.id);
  }

  peopleOfFilms = async (ids: string[]) => {
    const films = await this.filmRepository
      .createQueryBuilder('film')
      .leftJoinAndSelect('film.people', 'people')
      .where('film.id IN (:...ids)', { ids })
      .getMany();

    return films.map((film) => film.people);
  };

  async loadPeopleForFilm(film: Film) {
    return this.peopleLoader.load(film.id);
  }

  speciesOfFilms = async (ids: string[]) => {
    const films = await this.filmRepository
      .createQueryBuilder('film')
      .leftJoinAndSelect('film.species', 'species')
      .where('film.id IN (:...ids)', { ids })
      .getMany();

    return films.map((film) => film.species);
  };

  async loadSpeciesForFilm(film: Film) {
    return this.speciesLoader.load(film.id);
  }

  vehiclesOfFilms = async (ids: string[]) => {
    const films = await this.filmRepository
      .createQueryBuilder('film')
      .leftJoinAndSelect('film.vehicles', 'vehicles')
      .where('film.id IN (:...ids)', { ids })
      .getMany();

    return films.map((film) => film.vehicles);
  };

  async loadVehiclesForFilm(film: Film) {
    return this.vehicleLoader.load(film.id);
  }
}
