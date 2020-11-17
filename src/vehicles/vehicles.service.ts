import { Injectable } from '@nestjs/common';
import { VEHICLES } from 'src/data/vehicles.json';
import { FilmModel } from 'src/films/film.model';

@Injectable()
export class VehiclesService {
  vehicles = VEHICLES;

  getVehicles(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.vehicles);
    });
  }

  getVehicleById(id: String): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.vehicles.find((vehicle) => vehicle.id === id));
    });
  }

  getVehiclesByFilm(film: FilmModel): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.vehicles.filter((vehicle) => vehicle.film === film.id));
    });
  }
}
