import { Resolver, Query, Args } from '@nestjs/graphql';
import { VehiclesService } from './vehicles.service';

@Resolver("Vehicle")
export class VehiclesResolver {
  constructor(private vehiclesService: VehiclesService) { }

  @Query()
  vehicles() {
    return this.vehiclesService.getVehicles();
  }

  @Query()
  vehicle(@Args('id') id: String) {
    return this.vehiclesService.getVehicleById(id);
  }
}
