import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { FilmsService } from 'src/films/films.service';
import { Species } from 'src/graphql';
import { PeopleService } from 'src/people/people.service';
import { SpeciesModel } from './species.model';
import { SpeciesService } from './species.service';

@Resolver('Species')
export class SpeciesResolver {
  constructor(
    private speciesService: SpeciesService,
    private filmsService: FilmsService,
    private peopleService: PeopleService,
  ) {}

  @Query()
  species() {
    return this.speciesService.getSpecies();
  }

  @Query()
  specie(@Args('id') id: String) {
    return this.speciesService.getSpecieById(id);
  }

  @ResolveField()
  films(@Parent() species: SpeciesModel) {
    const { id } = species;
    return this.filmsService.getFilmsBySpecies(species);
  }

  @ResolveField()
  people(@Parent() species: SpeciesModel) {
    return this.peopleService.getPeopleBySpecies(species);
  }
}
