import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './location.model';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}

  async all(): Promise<Location[]> {
    return this.locationRepository.find({
      relations: ['residents', 'films'],
    });
  }

  async find(id: string): Promise<Location> {
    return this.locationRepository.findOne(id, {
      relations: ['residents', 'films'],
    });
  }

  async save(location: Location): Promise<Location> {
    return this.locationRepository.save(location);
  }
}
