import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from 'src/films/film.model';
import { Person } from 'src/people/person.model';
import { Repository } from 'typeorm';
import { Location } from './location.model';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}

  async all(): Promise<Location[]> {
    return this.locationRepository.find();
  }

  async find(id: string): Promise<Location> {
    return this.locationRepository.findOne(id);
  }

  async save(location: Location): Promise<Location> {
    return this.locationRepository.save(location);
  }

  async filmsForLocation(location: Location): Promise<Film[]> {
    const queryLocation = await this.locationRepository
      .createQueryBuilder('location')
      .where('location.id = :id', { id: location.id })
      .leftJoinAndSelect('location.films', 'films')
      .getOne();

    return queryLocation.films;
  }

  async residentsOfLocation(location: Location): Promise<Person[]> {
    const queryLocation = await this.locationRepository
      .createQueryBuilder('location')
      .where('location.id = :id', { id: location.id })
      .leftJoinAndSelect('location.residents', 'people')
      .getOne();

    return queryLocation.residents;
  }
}
