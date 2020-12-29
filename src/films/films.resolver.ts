import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Location } from 'src/locations/location.model';
import { Person } from 'src/people/person.model';
import { Species } from 'src/species/species.model';
import { Vehicle } from 'src/vehicles/vehicle.model';
import { Film } from './film.model';
import { FilmsService } from './films.service';

@Resolver((of) => Film)
export class FilmsResolver {
  constructor(private filmsService: FilmsService) {}

  @Query(() => [Film], {
    description: 'Get information about every Studio Ghibli film.',
  })
  async films() {
    return this.filmsService.all();
  }

  @Query(() => Film, {
    description: 'Get information about a specific Studio Ghibli film by UUID.',
  })
  async film(@Args('id') id: string) {
    return this.filmsService.find(id);
  }

  @ResolveField((returns) => [Location])
  async locations(@Parent() film: Film) {
    return this.filmsService.loadLocationsForFilm(film);
  }

  @ResolveField((returns) => [Person])
  async people(@Parent() film: Film) {
    return this.filmsService.loadPeopleForFilm(film);
  }

  @ResolveField((returns) => [Species])
  async species(@Parent() film: Film) {
    return this.filmsService.loadSpeciesForFilm(film);
  }

  @ResolveField((returns) => [Vehicle])
  async vehicles(@Parent() film: Film) {
    return this.filmsService.loadVehiclesForFilm(film);
  }
}
