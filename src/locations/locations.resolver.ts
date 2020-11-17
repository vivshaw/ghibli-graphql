import { Resolver, Query, Args } from '@nestjs/graphql';
import { LocationsService } from './locations.service';

@Resolver("Location")
export class LocationsResolver {
  constructor(private locationsService: LocationsService) { }

  @Query()
  locations() {
    return this.locationsService.getLocations();
  }

  @Query()
  location(@Args('id') id: String) {
    return this.locationsService.getLocationById(id);
  }
}
