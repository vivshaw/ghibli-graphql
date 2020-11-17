import { Injectable } from '@nestjs/common';
import { VEHICLES } from 'src/data/vehicles.json';
import { FilmModel } from 'src/films/film.model';
import { VehicleModel } from './vehicle.model';

@Injectable()
export class VehiclesService {
  vehicles = VEHICLES;

  async getVehicles(): Promise<VehicleModel[]> {
    return this.vehicles;
  }

  async getVehicleById(id: String): Promise<VehicleModel> {
    return this.vehicles.find((vehicle) => vehicle.id === id);
  }

  async getVehiclesByFilm(film: FilmModel): Promise<VehicleModel[]> {
    return this.vehicles.filter((vehicle) => vehicle.film === film.id);
  }
}
