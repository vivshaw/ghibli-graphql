import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { LocationsService } from 'src/locations/locations.service';
import { PeopleService } from 'src/people/people.service';
import { SpeciesService } from 'src/species/species.service';
import { VehiclesService } from 'src/vehicles/vehicles.service';
import { FilmModel } from './film.model';
import { FilmsService } from './films.service';

@Resolver('Film')
export class FilmsResolver {
  constructor(
    private filmsService: FilmsService,
    private peopleService: PeopleService,
    private speciesService: SpeciesService,
    private locationsService: LocationsService,
    private vehiclesService: VehiclesService,
  ) {}

  @Query()
  films() {
    return this.filmsService.getFilms();
  }

  @Query()
  film(@Args('id') id: String) {
    return this.filmsService.getFilmById(id);
  }

  @ResolveField()
  people(@Parent() film: FilmModel) {
    return this.peopleService.getPeopleByFilm(film);
  }

  @ResolveField()
  species(@Parent() film: FilmModel) {
    return this.speciesService.getSpeciesByFilm(film);
  }

  @ResolveField()
  locations(@Parent() film: FilmModel) {
    return this.locationsService.getLocationsByFilm(film);
  }

  @ResolveField()
  vehicles(@Parent() film: FilmModel) {
    return this.vehiclesService.getVehiclesByFilm(film);
  }
}
