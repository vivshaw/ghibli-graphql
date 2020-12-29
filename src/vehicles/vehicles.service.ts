import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from 'src/films/film.model';
import { Person } from 'src/people/person.model';
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

  async save(vehicle: Vehicle): Promise<Vehicle> {
    return this.vehicleRepository.save(vehicle);
  }

  async filmForVehicle(vehicle: Vehicle): Promise<Film> {
    const query = await this.vehicleRepository
      .createQueryBuilder('vehicle')
      .where('vehicle.id = :id', { id: vehicle.id })
      .leftJoinAndSelect('vehicle.film', 'film')
      .getOne();

    return query.film;
  }

  async pilotOfVehicle(vehicle: Vehicle): Promise<Person> {
    const query = await this.vehicleRepository
      .createQueryBuilder('vehicle')
      .where('vehicle.id = :id', { id: vehicle.id })
      .leftJoinAndSelect('vehicle.pilot', 'people')
      .getOne();

    return query.pilot;
  }
}
