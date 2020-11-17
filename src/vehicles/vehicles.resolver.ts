import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { FilmsService } from 'src/films/films.service';
import { Vehicle } from 'src/graphql';
import { PeopleService } from 'src/people/people.service';
import { VehiclesService } from './vehicles.service';

@Resolver("Vehicle")
export class VehiclesResolver {
  constructor(private vehiclesService: VehiclesService,
    private filmsService: FilmsService,
    private peopleService: PeopleService) { }

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
    return this.peopleService.getPersonByVehicleId(id);
  }

  @ResolveField()
  film(@Parent() vehicle: Vehicle) {
    const { id } = vehicle;
    return this.filmsService.getFilmByVehicleId(id);
  }
}
