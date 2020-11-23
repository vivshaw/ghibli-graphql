import { Resolver, Query, Args } from '@nestjs/graphql';
import { Vehicle } from './vehicle.model';
import { VehiclesService } from './vehicles.service';

@Resolver('Vehicle')
export class VehiclesResolver {
  constructor(private vehiclesService: VehiclesService) {}

  @Query(() => [Vehicle])
  vehicles() {
    return this.vehiclesService.all();
  }

  @Query(() => Vehicle)
  vehicle(@Args('id') id: string) {
    return this.vehiclesService.find(id);
  }
}
