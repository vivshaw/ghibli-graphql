import { Injectable } from '@nestjs/common';
import { Vehicle } from 'src/vehicles/vehicle.model';
import { VehiclesService } from 'src/vehicles/vehicles.service';

@Injectable()
export class SeederService {
  constructor(private readonly vehiclesService: VehiclesService) {}

  async seed() {
    const testV = new Vehicle();
    testV.name = 'Test V';
    testV.description = 'Desc';
    testV.length = 10;
    testV.vehicle_class = 'Test';
    return await this.vehiclesService.save(testV);
  }
}
