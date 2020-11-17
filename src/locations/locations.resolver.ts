import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { FilmsService } from 'src/films/films.service';
import { PeopleService } from 'src/people/people.service';
import { LocationModel } from './location.model';
import { LocationsService } from './locations.service';

@Resolver('Location')
export class LocationsResolver {
  constructor(
    private locationsService: LocationsService,
    private filmsService: FilmsService,
    private peopleService: PeopleService,
  ) {}

  @Query()
  locations() {
    return this.locationsService.getLocations();
  }

  @Query()
  location(@Args('id') id: String) {
    return this.locationsService.getLocationById(id);
  }

  @ResolveField()
  films(@Parent() location: LocationModel) {
    return this.filmsService.getFilmsByLocation(location);
  }

  @ResolveField()
  residents(@Parent() location: LocationModel) {
    return this.peopleService.getPeopleByLocation(location);
  }
}
