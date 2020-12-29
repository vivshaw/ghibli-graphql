import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Film } from 'src/films/film.model';
import { Person } from 'src/people/person.model';
import { Vehicle } from './vehicle.model';
import { VehiclesService } from './vehicles.service';

@Resolver((of) => Vehicle)
export class VehiclesResolver {
  constructor(private vehiclesService: VehiclesService) {}

  @Query(() => [Vehicle])
  async vehicles() {
    return this.vehiclesService.all();
  }

  @Query(() => Vehicle)
  async vehicle(@Args('id') id: string) {
    return this.vehiclesService.find(id);
  }

  @ResolveField((returns) => Film)
  async film(@Parent() vehicle: Vehicle) {
    return this.vehiclesService.filmForVehicle(vehicle);
  }

  @ResolveField((returns) => Person)
  async pilot(@Parent() vehicle: Vehicle) {
    return this.vehiclesService.pilotOfVehicle(vehicle);
  }
}
