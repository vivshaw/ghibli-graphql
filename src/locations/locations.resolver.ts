import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Film } from 'src/films/film.model';
import { Location } from './location.model';
import { LocationsService } from './locations.service';

@Resolver((of) => Location)
export class LocationsResolver {
  constructor(private locationsService: LocationsService) {}

  @Query(() => [Location])
  async locations() {
    return this.locationsService.all();
  }

  @Query(() => Location)
  async location(@Args('id') id: string) {
    return this.locationsService.find(id);
  }

  @ResolveField((returns) => [Film])
  async films(@Parent() location: Location) {
    return this.locationsService.filmsForLocation(location);
  }

  @ResolveField((returns) => [Film])
  async residents(@Parent() location: Location) {
    return this.locationsService.residentsOfLocation(location);
  }
}
