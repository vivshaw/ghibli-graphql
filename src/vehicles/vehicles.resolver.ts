import { Resolver, Query, Args } from '@nestjs/graphql';
import { VehiclesService } from './vehicles.service';

@Resolver('Vehicle')
export class VehiclesResolver {
  constructor(private vehiclesService: VehiclesService) {}

  @Query()
  vehicles() {
    return this.vehiclesService.all();
  }

  @Query()
  vehicle(@Args('id') id: string) {
    return this.vehiclesService.find(id);
  }
}
