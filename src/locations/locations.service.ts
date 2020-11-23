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
    return this.locationRepository.find();
  }

  async find(id: string): Promise<Location> {
    return this.locationRepository.findOne(id);
  }
}
