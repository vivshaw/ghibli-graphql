import { Resolver, Query, Args } from '@nestjs/graphql';
import { Location } from './location.model';
import { LocationsService } from './locations.service';

@Resolver('Location')
export class LocationsResolver {
  constructor(private locationsService: LocationsService) {}

  @Query(() => [Location])
  locations() {
    return this.locationsService.all();
  }

  @Query(() => Location)
  location(@Args('id') id: string) {
    return this.locationsService.find(id);
  }
}
