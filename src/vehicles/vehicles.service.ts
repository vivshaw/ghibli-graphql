import { Injectable } from '@nestjs/common';
import { FilmsService } from 'src/films/films.service';
import { PeopleService } from 'src/people/people.service';
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
      resolve(this.vehicles.find(vehicle => vehicle.id === id));
    })
  }
}
