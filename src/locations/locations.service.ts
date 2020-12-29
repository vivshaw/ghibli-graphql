import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as DataLoader from 'dataloader';
import { Film } from 'src/films/film.model';
import { Person } from 'src/people/person.model';
import { Repository } from 'typeorm';
import { Location } from './location.model';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {
    this.filmLoader = new DataLoader<string, Film[]>(this.filmsOfLocations);
    this.peopleLoader = new DataLoader<string, Person[]>(
      this.residentsOfLocations,
    );
  }

  filmLoader: DataLoader<string, Film[]>;
  peopleLoader: DataLoader<string, Person[]>;

  async all(): Promise<Location[]> {
    return this.locationRepository.find();
  }

  async find(id: string): Promise<Location> {
    return this.locationRepository.findOne(id);
  }

  async save(location: Location): Promise<Location> {
    return this.locationRepository.save(location);
  }

  filmsOfLocations = async (ids: string[]) => {
    const locations = await this.locationRepository
      .createQueryBuilder('location')
      .leftJoinAndSelect('location.films', 'films')
      .where('location.id IN (:...ids)', { ids })
      .getMany();

    return locations.map((location) => location.films);
  };

  async loadFilmsForLocation(location: Location) {
    return this.filmLoader.load(location.id);
  }

  residentsOfLocations = async (ids: string[]) => {
    const locations = await this.locationRepository
      .createQueryBuilder('location')
      .leftJoinAndSelect('location.residents', 'people')
      .where('location.id IN (:...ids)', { ids })
      .getMany();

    return locations.map((location) => location.residents);
  };

  async loadResidentsForLocation(location: Location) {
    return this.peopleLoader.load(location.id);
  }
}
