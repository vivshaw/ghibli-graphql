import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Vehicle } from 'src/graphql';
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

  @ResolveField()
  pilot(@Parent() vehicle: Vehicle) {
    const { id } = vehicle;
    return this.vehiclesService.getPilotByVehicleId(id);
  }

  @ResolveField()
  film(@Parent() vehicle: Vehicle) {
    const { id } = vehicle;
    return this.vehiclesService.getFilmByVehicleId(id);
  }
}
