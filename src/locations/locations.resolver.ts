import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Film } from 'src/films/film.model';
import { Location } from './location.model';
import { LocationsService } from './locations.service';

@Resolver((of) => Location)
export class LocationsResolver {
  constructor(private locationsService: LocationsService) {}

  @Query(() => [Location], {
    description:
      'Get information about all locations appearing in Studio Ghibli films',
  })
  async locations() {
    return this.locationsService.all();
  }

  @Query(() => Location, {
    description: 'Get information about a specific location by UUID.',
  })
  async location(@Args('id') id: string) {
    return this.locationsService.find(id);
  }

  @ResolveField((returns) => [Film])
  async films(@Parent() location: Location) {
    return this.locationsService.loadFilmsForLocation(location);
  }

  @ResolveField((returns) => [Film])
  async residents(@Parent() location: Location) {
    return this.locationsService.loadResidentsForLocation(location);
  }
}
