import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import DataLoader from 'dataloader';
import { Film } from 'src/films/film.model';
import { Person } from 'src/people/person.model';
import { Repository } from 'typeorm';
import { Vehicle } from './vehicle.model';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {
    this.filmLoader = new DataLoader<string, Film>(this.filmOfVehicles);
    this.peopleLoader = new DataLoader<string, Person>(this.pilotOfVehicles);
  }

  filmLoader: DataLoader<string, Film>;
  peopleLoader: DataLoader<string, Person>;

  async all(): Promise<Vehicle[]> {
    return this.vehicleRepository.find();
  }

  async find(id: string): Promise<Vehicle> {
    return this.vehicleRepository.findOne(id);
  }

  async save(vehicle: Vehicle): Promise<Vehicle> {
    return this.vehicleRepository.save(vehicle);
  }

  filmOfVehicles = async (ids: string[]) => {
    const vehicles = await this.vehicleRepository
      .createQueryBuilder('vehicle')
      .leftJoinAndSelect('vehicle.film', 'film')
      .where('vehicle.id IN (:...ids)', { ids })
      .getMany();

    return vehicles.map((vehicle) => vehicle.film);
  };

  async loadFilmForVehicle(vehicle: Vehicle) {
    return this.filmLoader.load(vehicle.id);
  }

  pilotOfVehicles = async (ids: string[]) => {
    const vehicles = await this.vehicleRepository
      .createQueryBuilder('vehicle')
      .leftJoinAndSelect('vehicle.pilot', 'people')
      .where('vehicle.id IN (:...ids)', { ids })
      .getMany();

    return vehicles.map((vehicle) => vehicle.pilot);
  };

  async loadPilotForVehicle(vehicle: Vehicle) {
    return this.peopleLoader.load(vehicle.id);
  }
}
