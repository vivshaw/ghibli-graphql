import { Injectable } from '@nestjs/common';
import { VEHICLES }  from "./data/vehicles.json";

@Injectable()
export class VehiclesService {
  vehicles = VEHICLES;

  getVehicles(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.vehicles);
    })
  }

  getVehicleById(id: String): Promise<any> {
    return new Promise(resolve => {
      resolve(this.vehicles.find(film => film.id === id));
    })
  }
}
