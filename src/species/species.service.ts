import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
}
