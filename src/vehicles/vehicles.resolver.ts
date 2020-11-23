import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { FilmsService } from 'src/films/films.service';
import { PeopleService } from 'src/people/people.service';
import { VehicleModel } from './vehicle.model';
import { VehiclesService } from './vehicles.service';

@Resolver('Vehicle')
export class VehiclesResolver {
  constructor(
    private vehiclesService: VehiclesService,
    private filmsService: FilmsService,
    private peopleService: PeopleService,
  ) {}

  @Query()
  vehicles() {
    return this.vehiclesService.getVehicles();
  }

  @Query()
  vehicle(@Args('id') id: string) {
    return this.vehiclesService.getVehicleById(id);
  }

  @ResolveField()
  pilot(@Parent() vehicle: VehicleModel) {
    return this.peopleService.getPersonByVehicle(vehicle);
  }

  @ResolveField()
  film(@Parent() vehicle: VehicleModel) {
    return this.filmsService.getFilmByVehicle(vehicle);
  }
}
