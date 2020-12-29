import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Film } from 'src/films/film.model';
import { Person } from 'src/people/person.model';
import { Vehicle } from './vehicle.model';
import { VehiclesService } from './vehicles.service';

@Resolver((of) => Vehicle)
export class VehiclesResolver {
  constructor(private vehiclesService: VehiclesService) {}

  @Query(() => [Vehicle], {
    description:
      'Get information about all vehicles appearing in Studio Ghibli films.',
  })
  async vehicles() {
    return this.vehiclesService.all();
  }

  @Query(() => Vehicle, {
    description: 'Get information about a specific vehicle by UUID',
  })
  async vehicle(@Args('id') id: string) {
    return this.vehiclesService.find(id);
  }

  @ResolveField((returns) => Film)
  async film(@Parent() vehicle: Vehicle) {
    return this.vehiclesService.loadFilmForVehicle(vehicle);
  }

  @ResolveField((returns) => Person)
  async pilot(@Parent() vehicle: Vehicle) {
    return this.vehiclesService.loadPilotForVehicle(vehicle);
  }
}
