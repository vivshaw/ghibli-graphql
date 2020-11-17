import { Injectable } from '@nestjs/common';
import { FilmsService } from 'src/films/films.service';
import { PeopleService } from 'src/people/people.service';
import { VEHICLES }  from "./data/vehicles.json";

@Injectable()
export class VehiclesService {
  vehicles = VEHICLES;

  constructor(private peopleService: PeopleService, private filmService: FilmsService) { }

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

  getPilotByVehicleId(id: String): Promise<any> {
    return new Promise(resolve => {
      const { pilot } = this.vehicles.find(vehicle => vehicle.id === id);
      resolve(this.peopleService.getPersonById(pilot));
    })
  }

  getFilmByVehicleId(id: String): Promise<any> {
    return new Promise(resolve => {
      const { film } = this.vehicles.find(vehicle => vehicle.id === id);
      resolve(this.filmService.getFilmById(film));
    })
  }
}
