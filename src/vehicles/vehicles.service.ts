import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './vehicle.model';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  async all(): Promise<Vehicle[]> {
    return this.vehicleRepository.find();
  }

  async find(id: string): Promise<Vehicle> {
    return this.vehicleRepository.findOne(id);
  }
}
