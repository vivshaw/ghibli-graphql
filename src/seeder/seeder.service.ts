import { Injectable } from '@nestjs/common';
import { Vehicle } from 'src/vehicles/vehicle.model';
import { VehiclesService } from 'src/vehicles/vehicles.service';
import { VEHICLES } from './data/vehicles.json';

@Injectable()
export class SeederService {
  constructor(private readonly vehiclesService: VehiclesService) {}

  async seed() {
    for (const { id, name, description, vehicle_class, length } of VEHICLES) {
      const seedVehicle = new Vehicle();
      seedVehicle.id = id;
      seedVehicle.name = name;
      seedVehicle.description = description;
      seedVehicle.vehicle_class = vehicle_class;
      seedVehicle.length = length;
      await this.vehiclesService.save(seedVehicle);
    }
  }
}
